const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as needed

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'No authorization header provided'
        });
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findByPk(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({
            message: 'Invalid token'
        });
    }
};

module.exports = authMiddleware;