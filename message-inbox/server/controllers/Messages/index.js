const Message = require("../../models/Message");

const sendMessage = async (req, res) => {
    const {
        receiverId,
        title,
        content
    } = req.body;
    const senderId = req.user.id;
    try {
        const message = await Message.create({
            senderId,
            receiverId,
            title,
            content
        });
        res.status(201).json(message);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}

const receivedMessages = async (req, res) => {
    const receiverId = req.user.id;
    try {
        const messages = await Message.findAll({
            where: {
                receiverId
            },
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const sentMessages = async (req, res) => {
    const senderId = req.user.id;
    try {
        const messages = await Message.findAll({
            where: {
                senderId
            }
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
}

const receivedMessage = async (req, res) => {
    const {
        messageId
    } = req.params;
    const receiverId = req.user.id;
    try {
        const message = await Message.findOne({
            where: {
                id: messageId,
                receiverId
            }
        });
        if (!message) {
            return res.status(404).json({
                message: 'Message not found'
            });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
}

const messageById = async (req, res) => {
    const {
        messageId
    } = req.params;
    try {
        const message = await Message.findByPk(messageId, {
            include: [{
                model: Message,
                as: 'replies',
                include: [{
                    model: Message,
                    as: 'replies'
                }] // Include nested replies
            }]
        });
        if (!message) {
            return res.status(404).json({
                message: 'Message not found'
            });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }

}

const deleteMessage = async (req, res) => {
    const {
        ids
    } = req.body;
    try {

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({
                message: 'No message IDs provided'
            });
        }


        await Message.destroy({
            where: {
                id: ids
            }
        });
        res.status(200).json({
            message: 'Message deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
}

const getMessageThread = async (req, res) => {
    const {
        messageId
    } = req.params;
    try {
        const message = await Message.findByPk(messageId, {
            include: [{
                model: Message,
                as: 'replies',
                include: [{
                    model: Message,
                    as: 'replies'
                }]
            }]
        });

        if (!message) {
            return res.status(404).json({
                message: 'Message not found'
            });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

const replyToMessage = async (req, res) => {
    const {
        parentMessageId,
        content,
        senderType
    } = req.body;

    try {
        // Fetch the parent message
        console.log('====================================');
        console.log(req.body);
        console.log('====================================');
        const parentMessage = await Message.findByPk(parentMessageId);
        if (!parentMessage) {
            return res.status(404).json({
                message: 'Parent message not found'
            });
        }

        // Set the title for the reply
        const title = `RE: ${parentMessage.title}`;
        const reply = await Message.create({
            title,
            content,
            parentMessageId,
            senderType,
            senderId: senderType === 'support' ? null : req.user.id // If support, senderId can be null
        });

        res.status(201).json(reply);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};


module.exports = {
    sendMessage,
    receivedMessages,
    sentMessages,
    receivedMessage,
    messageById,
    deleteMessage,
    getMessageThread,
    replyToMessage,
}