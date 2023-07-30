import { HTTP, STATUS } from '../config/Http.js';

/**
 * Middleware to validate API key for protected routes.
 * The function checks if the provided API key matches a pre-defined valid key.
 * If the API key is valid, it allows the request to proceed to the next middleware using `next()`.
 * If the API key is invalid, it sends an Unauthorized response with an error message.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {function} next - The next middleware function.
 * @returns {void} - Does not return anything. It either allows the request to proceed or sends an Unauthorized response.
 */
const ValidateApiKey = (req, res, next) => {
    const { key } = req.params;

    if (key === '123') {
        next();
    } else {
        res.status(HTTP.UNAUTHORIZED).json({ http: { status: STATUS.UNAUTHORIZED, code: HTTP.UNAUTHORIZED }, message: "Invalid API Token" });
    }
}

export default ValidateApiKey;