/**
 * Middleware to ensure that the user has a cookie named "connect.sid".
 * If the cookie is present, the middleware calls the 'next()' function to proceed to the next middleware or route handler.
 * If the cookie is not present, the middleware sends a 401 Unauthorized status response.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {function} next - The callback function to call the next middleware or route handler.
 */
const SessionEnsure = (req, res, next) => {
    const cookieName = "connect.sid";

    if (req.cookies && req.cookies[cookieName]) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }

};

export default SessionEnsure;
