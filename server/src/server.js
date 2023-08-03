
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import mongodb from './config/Database.js';
import { HTTP } from './config/Http.js';
import MIDDLEWARE from './config/Middleware.js';
import ROUTER from './config/Router.js';
import CONTROLLER from './config/Controller.js';


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

app.listen(PORT, () => {
    console.log(`[Server Started] | Listening on port \x1b[32m${PORT}\x1b[0m`);
});