const User = require('../models/User');

async function findUserById(_id) {
    const user = await User.findById(_id).lean();
    return user;
}

async function findUserByName(username) {
    const user = await User.findOne({ username });
    return user;
}

async function findUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
}

module.exports = { findUserById, findUserByName, findUserByEmail };