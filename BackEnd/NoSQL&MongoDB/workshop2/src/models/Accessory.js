const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            // validator: /^https?/g,
            validator: function () {
                return this.imageUrl.startsWith('http');
            },
            message: 'Image url should be a link with http/s'
        }
    },
    description: {
        type: String,
        required: true,
        maxlength: 200
    }
});

// accessorySchema.path('imageUrl').validate(function () {
//     return this.name.startsWith('http');
// }, 'Image Url should be a link');

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;