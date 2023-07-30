import AuthController from '../controllers/AuthController.js';
import UserController from '../controllers/UserController.js';

/**
 * Controller configuration object for different controller classes used in the application.
 * The `CONTROLLER` object contains references to two controller classes, `AUTH` and `USER`.
 * These controller classes are responsible for handling different aspects of authentication and user-related functionalities.
 *
 * @typedef {Object} CONTROLLER
 * @property {AuthController} AUTH - The controller class responsible for handling authentication-related functionalities.
 * @property {UserController} USER - The controller class responsible for handling user-related functionalities.
 */
const CONTROLLER = {
    AUTH: AuthController,
    USER: UserController,
}

export default CONTROLLER;