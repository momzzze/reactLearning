const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);
exports.addPublication =  (userId, publicationId) => {
    // const user = User.findById(userId);
    
    // await user.publications.push(publication);
    // await user.save();
    // return user;

    return User.updateOne({ _id: userId },{$push: {publications: publicationId}});
}



// User.updateOne({ _id: userId }, { $push: { publications: publicationId } });