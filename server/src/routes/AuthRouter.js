import express from 'express';
import CONTROLLER from '../config/Controller.js';


const auth = express();

auth.post('/login', async (req, res) => {
    await CONTROLLER.AUTH.login(req, res);
});

export { auth as AuthRouter }