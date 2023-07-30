import { ApiRouter } from '../routes/ApiRouter.js';
import { AuthRouter } from '../routes/AuthRouter.js';

/**
 * Router configuration object for handling different routes in the application.
 * The `ROUTER` object contains references to two router objects, `API` and `AUTH`.
 * These router objects are used to define and handle specific routes in the application.
 *
 * @typedef {Object} ROUTER
 * @property {object} API - The router object for handling API-related routes.
 * @property {object} AUTH - The router object for handling authentication-related routes.
 */
const ROUTER = {
    API: ApiRouter,
    AUTH: AuthRouter,
}

export default ROUTER;