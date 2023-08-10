
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path, { dirname } from 'path';
import session from 'express-session';

import { HTTP } from './config/Http.js';
import CONTROLLER from './config/Controller.js';
import MIDDLEWARE from './config/Middleware.js';
import METHOD from './config/Method.js';
import mongodb from './config/Database.js';
import ROUTER from './config/Router.js';
import MAIL from './config/Mail.js';

dotenv.config();
mongodb.connect();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (30 * 24 * 60 * 60 * 1000),
    },
}));


app.use('/api', [MIDDLEWARE.API.VALIDATE], ROUTER.API);
app.use('/auth', [], ROUTER.AUTH);

app.use('/admin', [MIDDLEWARE.SESSION.VALIDATE('admin')]);
app.use('/donor', [MIDDLEWARE.SESSION.VALIDATE('donor')]);
app.use('/hospital', [MIDDLEWARE.SESSION.VALIDATE('hospital')]);
app.use('/logout', CONTROLLER.AUTH.logout);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../', '../', 'client', 'build')));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../', '../', 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', function (req, res) {
        res.sendStatus(HTTP.NETWORK_AUTHENTICATION_REQUIRED);
    });
}

app.get('/test', (req, res) => {

    // const content = { email: 'jed.terrazola.r@gmail.com', subject: 'OTP', html: MAIL.OTP, replacement: { name: 'Jed', otp: 123456, } };

    const content = {
        to: 'jed.terrazola.r@gmail.com',
        subject: 'One-Time Password',
        html: MAIL.OTP,
        replacements: {
            subject: 'One-Time Password',
            name: 'Jed Terrazola',
            otp: '123456',
            image: 'https://img.freepik.com/premium-vector/blood-donors-icon-blood-logo-vector-illustration_487414-566.jpg',
        }

    };

    METHOD.MAIL.SEND(content);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`[Server Started] | Listening on port \x1b[32m${PORT}\x1b[0m`);
});