import jwt from 'jsonwebtoken';

/**
 * Middleware to validate user session based on the required role.
 *
 * This middleware checks if the user has a valid session by verifying the JWT token
 * stored in the `session_id` property of the request's session. If the session is valid
 * and the user's role includes the required role, it proceeds to the next middleware
 * or route handler. If the user's role does not match the required role, it redirects
 * the user to the appropriate route based on their role. If the session is invalid or
 * the JWT token cannot be verified, it redirects the user to the logout page.
 *
 * @param {string} requiredRole - The required role for accessing the protected route.
 *                               Valid values are 'admin', 'hospital', or 'donor'.
 *                               If an invalid role is provided, the user will be redirected
 *                               to the logout page.
 *
 * @returns {function} - The middleware function that handles session validation.
 *                       This function should be used as middleware for protected routes.
 */
const SessionValidate = (requiredRole) => async (req, res, next) => {

    const user = req.session.user;

    if (user && jwt.verify(user, process.env.JWT_SECRET_KEY)) {

        try {
            const decoded = jwt.verify(user, process.env.JWT_SECRET_KEY);
            const { role } = decoded;

            // Added Authorization to attach the token.
            res.setHeader('Authorization', 'Bearer ' + user);

            if (role.includes(requiredRole)) {
                next();
            } else {
                const roles = ['admin', 'donor', 'hospital'];
                if (roles.includes(role)) {
                    res.redirect('/' + role);
                } else {
                    res.redirect('/logout');
                }
            }
        } catch (err) {
            res.redirect('/logout');
        }
    } else {
        res.redirect('/logout');
    }
};

export default SessionValidate;
