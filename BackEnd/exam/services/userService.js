const User = require('../models/User');


exports.addCrypto = (userId, crypto) => {
    return User.updateOne({ _id: userId },{})
};