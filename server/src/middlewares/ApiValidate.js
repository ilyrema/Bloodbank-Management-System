
import jwt from 'jsonwebtoken';

import { HTTP, STATUS } from '../config/Http.js';

/**
 * Middleware to validate API access using a JWT token containing role and API token information.
 *
 * This middleware checks if the request contains a valid session with a JWT token (API token)
 * in the `session_id` property. If the token is valid and contains the correct role and API token,
 * it allows the request to proceed to the next middleware or route handler. Otherwise, it returns
 * an HTTP 401 Unauthorized response with an appropriate error message.
 *
 * @param {object} req - The request object from Express.
 * @param {object} res - The response object from Express.
 * @param {function} next - The next function to continue to the next middleware or route handler.
 *
 * @returns {Promise<void>} - A Promise that resolves once the API validation is completed.
 *
 * @throws {Error} - If the JWT token is invalid, missing, or contains incorrect role or API token.
 *
 **/
const ApiValidate = async (req, res, next) => {

    const user = req.session.user;

    if (user && jwt.verify(user, process.env.JWT_SECRET_KEY)) {
        try {
            const decoded = jwt.verify(user, process.env.JWT_SECRET_KEY);
            const { role, api_token } = decoded;

            const validApiToken = role === 'admin' && api_token === 1024;

            if (validApiToken) {
                next();
            } else {
                res.status(HTTP.UNAUTHORIZED).json({
                    // http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, 
                    message: "Incorrect API Token",
                });
            }
        } catch (error) {
            res.status(HTTP.UNAUTHORIZED).json({
                // http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED },
                message: "Invalid API Token",
            });
        }
    } else {
        res.status(HTTP.UNAUTHORIZED).json({
            // http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, 
            message: "Missing API Token",
        });
    }
}

export default ApiValidate;