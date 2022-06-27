const mongoose = require('mongoose');

mongoose.set('runValidators', true);

async function connectToDB() {
    await mongoose.connect('mongodb://localhost:27017/crypto', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('connected to DB');
}

module.exports = connectToDB;