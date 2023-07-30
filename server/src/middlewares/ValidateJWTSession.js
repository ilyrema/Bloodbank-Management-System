import jwt from 'jsonwebtoken';
import { HTTP, STATUS } from '../config/Http.js';

/**
 * Middleware to validate JWT session for protected routes.
 * The function checks for a JWT token in the request headers, query parameters, or cookies.
 * If a valid token is found, it decodes the token and attaches the decoded payload to the request object as `req.user`.
 * If the token is missing or invalid, it sends an Unauthorized response.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {function} next - The next middleware function.
 * @returns {Promise<void>} - Resolves to the next middleware on successful validation; otherwise, returns an Unauthorized response.
 */
const ValidateJWTSession = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.cookies.token;

    console.log(token);
    if (!token) {
        return res.status(HTTP.UNAUTHORIZED).json({ http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(HTTP.UNAUTHORIZED).json({ http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, message: 'Invalid or expired token.' });
    }
};

export default ValidateJWTSession;
