const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    const {
        username,
        password
    } = req.body;
    try {
        const existingUser = await User.findOne({
            where: {
                username
            }
        });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const user = await User.create({
            username,
            password
        });
        res.status(201).json(user);
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            message: 'Server error'
        });
    }
}

exports.login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    try {
        const user = await User.findOne({
            where: {
                username
            }
        });

        const isPasswordValid = await user.validatePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
        const token = jwt.sign({
            id: user.id
        }, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        res.json({
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
}

exports.user = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log('Error fetching user data', error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}