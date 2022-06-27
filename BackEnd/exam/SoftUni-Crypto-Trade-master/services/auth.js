const User = require('../models/User');
const bcrypt = require('bcrypt');
const userService = require('./user');

async function register(username, email, password, repeat) {
    const user = new User({
        username, email, password, repeat
    });

    await user.save();
    return user;
}

async function login(email, password) {
    const user = await userService.findUserByEmail(email);
    if (!user) {
        throw Error('Wrong email or password');
    }

    const comparison = await bcrypt.compare(password, user.password);

    if (!comparison) {
        throw Error('Wrong email or password');
    }

    return user;
}

module.exports = {
    register,
    login,
}