const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Extract Authorization header
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided." });
    }

    // Extract the actual token (removing "Bearer ")
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store user data in request
        next();
    } catch (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token." });
    }
}

module.exports = userMiddleware;