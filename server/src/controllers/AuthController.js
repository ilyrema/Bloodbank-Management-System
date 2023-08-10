import jwt from 'jsonwebtoken';

import { HTTP, STATUS } from '../config/Http.js';


const AuthController = {
    login: async (req, res) => {
        // const { username, password } = req.body;

        // try {
        //     const verified = username === 'hahahaha' || password === 'hahahaha';

        //     if (verified) {
        //         const user = jwt.sign({ username, role: 'admin', api_token: 1024 }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

        //         req.session.user = user;

        //         const expiration = new Date();
        //         expiration.setMinutes(expiration.getMinutes() + 10);

        //         await res.status(HTTP.OK).json({
        //             verified,
        //             message: 'Success! Logged in as admin.',
        //             expiration,
        //         });
        //     } else {
        //         await res.status(HTTP.UNAUTHORIZED).json({
        //             verified,
        //             message: 'Invalid credentials. Please check your username and password.'
        //         });
        //     }
        // } catch (err) {
        //     await res.status(HTTP.INTERNAL_SERVER_ERROR).json({
        //         message: 'Internal server error',
        //     });
        // }
    },

    register: async (req, res) => {
        await res.send('Auth - Register');
    },

    login: async (req, res) => {
        const { username, password, remember, resend } = req.body;
        try {
            const verified = username === 'hahahaha' || password === 'hahahaha';
            const message = resend ? 'The One-Time PIN has been send. Please check your email.' : 'Success! Logged in as admin.';

            if (verified) {

                const expiration = new Date();
                expiration.setMinutes(expiration.getMinutes() + 10);

                if (remember) {
                    const user = jwt.sign({ username, role: 'admin', api_token: 1024 }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
                    req.session.user = user;
                }

                await res.status(HTTP.OK).json({
                    verified,
                    message,
                    expiration
                });
            } else {
                await res.status(HTTP.UNAUTHORIZED).json({
                    verified,
                    message: 'Invalid credentials. Please check your username and password.',
                });
            }
        } catch (err) {
            await res.status(HTTP.INTERNAL_SERVER_ERROR).json({
                message: 'Internal server error',
            });
        }
    },

    logout: async (req, res) => {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
};

export default AuthController;
