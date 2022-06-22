const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/User');


exports.register = async ({ username, password, repeatPassword }) => {
    if (password !== repeatPassword) {
        return false;
    }
    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword,
    });

    return createdUser;

};
