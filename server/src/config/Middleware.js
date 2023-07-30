import ValidateApiKey from '../middlewares/ValidateApiKey.js';
import ValidateJWTSession from '../middlewares/ValidateJWTSession.js';

/**
 * Middleware configuration object for different middleware functions used in the application.
 * The `MIDDLEWARE` object contains references to two middleware functions, `VALIDATE_API_KEY` and `VALIDATE_JWT_SESSION`.
 * These middleware functions are used for validating API keys and JWT sessions, respectively, in various routes.
 *
 * @typedef {Object} MIDDLEWARE
 * @property {function} VALIDATE_API_KEY - The middleware function to validate API keys for protected routes.
 * @property {function} VALIDATE_JWT_SESSION - The middleware function to validate JWT sessions for protected routes.
 */
const MIDDLEWARE = {
    VALIDATE_API_KEY: ValidateApiKey,
    VALIDATE_JWT_SESSION: ValidateJWTSession,
}

export default MIDDLEWARE;