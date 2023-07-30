import jwt from 'jsonwebtoken';
import { HTTP, STATUS } from '../config/Http.js';

const AuthController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const verified = username === 'hahahaha' && password === 'hahahaha';

            if (verified) {

                const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

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
