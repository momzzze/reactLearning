const bcrypt = require('bcryptjs');
const db = require("../../config/db");
const Message = require('../Message');
const {
    DataTypes
} = require('sequelize');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }
}, {
    timestamps: true
});

User.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Define relationships here to avoid circular dependencies
User.hasMany(Message, {
    foreignKey: 'senderId',
    as: 'sentMessages'
});
User.hasMany(Message, {
    foreignKey: 'receiverId',
    as: 'receivedMessages'
});

module.exports = User;