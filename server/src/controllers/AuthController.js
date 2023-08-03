import jwt from 'jsonwebtoken';

import { HTTP, STATUS } from '../config/Http.js';


const AuthController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const verified = username === 'hahahaha' || password === 'hahahaha';

            if (verified) {
                const user = jwt.sign({ username, role: 'admin', api_token: 1024 }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

                req.session.user = user;

                await res.status(HTTP.OK).json({
                    // http: { status: STATUS.OK, code: HTTP.OK },
                    verified,
                    message: 'Success! Logged in as admin.',
                });
            } else {
                await res.status(HTTP.UNAUTHORIZED).json({
                    // http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED },
                    verified,
                    message: 'Invalid credentials. Please check your username and password.'
                });
            }
        } catch (err) {
            await res.status(HTTP.INTERNAL_SERVER_ERROR).json({
                // http: { status: STATUS.INTERNAL_SERVER_ERROR, code: HTTP.INTERNAL_SERVER_ERROR },
                message: 'haha',
            });
        }
    },

    register: async (req, res) => {
        await res.send('Auth - Register');
    },

    logout: async (req, res) => {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
};

export default AuthController;
