
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import mongodb from './config/Database.js';
import { HTTP } from './config/Http.js';
import MIDDLEWARE from './config/Middleware.js';
import ROUTER from './config/Router.js';


dotenv.config();
mongodb.connect();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use('/api/:key', [MIDDLEWARE.VALIDATE_API_KEY], ROUTER.API);
app.use('/auth', ROUTER.AUTH);


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