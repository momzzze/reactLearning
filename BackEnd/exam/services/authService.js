const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, SALT_ROUNDS } = require('../config/env');


exports.create = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        return { message: 'Cannot find email or password' };
    }
    if (email != user.email) {
        return { message: 'Cannot find email or password' };
    }

    const isValid = bcrypt.compare(password, user.password);
    console.log(isValid);
    if (!isValid) {
        return { message: 'Cannot find email or password' };
    }
    return user;


};

exports.createToken = (user) => {
    // console.log(user);

    const payload = { _id: user._id, username: user.username, email: user.email };
    const options = { expiresIn: '2d' };
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });
};