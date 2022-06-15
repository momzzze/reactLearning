const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        maxlength: 200
    },
    cubes: {
        type: Object,
    }
})

accessorySchema.path('imageUrl').validate(function () {
    return this.name.startsWith('http');
}, 'Image Url should be a link');

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;