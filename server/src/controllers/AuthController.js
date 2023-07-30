import jwt from 'jsonwebtoken';
import { HTTP, STATUS } from '../config/Http.js';

const AuthController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            // Replace this verification with your actual authentication logic
            const verified = username === 'hahahaha' && password === 'hahahaha';

            if (verified) {
                // Replace 'YOUR_SECRET_KEY' with your actual JWT secret key
                const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

                // const properties = {
                //     access_token: token,
                //     HttpOnly: true,
                // }
                // const cookie = `${cookie_name}=${token}; HttpOnly; Secure; Max-Age=3600; SameSite=Strict; Path=/; Expires=`;
                // // Set the JWT token in an HttpOnly and Secure cookie
                await res.status(HTTP.OK).json({ http: { status: STATUS.OK, code: HTTP.OK }, token, verified, message: 'success' });
            } else {
                await res.status(HTTP.UNAUTHORIZED).json({ http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, verified, message: 'Invalid credentials' });
            }
        } catch (err) {
            await res.status(HTTP.INTERNAL_SERVER_ERROR).json({ http: { status: STATUS.INTERNAL_SERVER_ERROR, code: HTTP.INTERNAL_SERVER_ERROR }, message: '' });
        }
    },

    register: async (req, res) => {
        await res.send('Auth - Register');
    },
};

export default AuthController;
