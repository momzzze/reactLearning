const { model, Schema, Types } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [5, 'Username must be at least five characters'],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [10, 'Email must be at least 10 characters long'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password must be at least four characters'],
        trim: true,
    },
});

userSchema.virtual('repeat')
.get(function() {
    return this._repeat
})
.set(function(value) {
    this._repeat = value.trim();
});

userSchema.pre('validate', async function(next) {
    const existingUser = await model('User', userSchema).findOne({ username: this.username });
    const existingEmail = await model('User', userSchema).findOne({ email: this.email });
    if (existingUser) {
        this.invalidate('username', 'User already exists');
    }

    if (existingEmail) {
        this.invalidate('email', 'Email already exists');
    }

    next();

});

userSchema.pre('validate', async function(next) {
    if (this.password !== this.repeat) {
        this.invalidate('repeat', 'Passwords do not match');
    }

    next();
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next(); 
    } catch (err) {
        return next(err);
    }
});

module.exports = model('User', userSchema);