const {
    DataTypes
} = require("sequelize");
const db = require("../../config/db");

const Message = db.define('message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    parentMessageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'messages',
            key: 'id'
        }
    },
    senderType: {
        type: DataTypes.STRING,
        allowNull: false, // Adjust as necessary
    }
}, {
    timestamps: true
});

// Set up associations
Message.hasMany(Message, {
    foreignKey: 'parentMessageId',
    as: 'replies'
});

Message.belongsTo(Message, {
    foreignKey: 'parentMessageId',
    as: 'parentMessage'
});

module.exports = Message;