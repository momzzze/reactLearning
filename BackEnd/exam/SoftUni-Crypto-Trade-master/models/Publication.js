const { model, Schema, Types } = require('mongoose');

const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least two characters long'],
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        trim: true,
        validate: {
            validator(value) {
                return /https?:\/\//.test(value);
            },
            message: 'Image must start with http:// or https://',
        },
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be a positive number'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long'],
    },
    paymentMethod: {
        type: String,
        trim: true,
        required: [true, 'Payment method is required'],
        lowercase: true,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'Payment method must be crypto-wallet, credit-card, debit-card, or paypal'
        },
    },
    buyers: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is missing'],
    }
});

module.exports = model('Publication', publicationSchema);