const {
    register,
    login,
    user
} = require('../controllers/Auth');
const authMiddleware = require('../middleware/authMiddleware');
const {
    sentMessages,
    receivedMessages,
    sendMessage,
    messageById,
    deleteMessage,
    replyToMessage,
    getMessageThread,
    replyToMessageMock,
} = require('../controllers/Messages');

const router = require('express').Router();
// auth routes
router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware, user);

// message routes
router.get('/sent', authMiddleware, sentMessages);
router.get('/received', authMiddleware, receivedMessages);
router.get('/message/:messageId', authMiddleware, messageById);
router.delete('/messages/', authMiddleware, deleteMessage);
router.post('/send', authMiddleware, sendMessage);
router.post('/reply', authMiddleware, replyToMessage);
router.get('/message/:messageId/thread', authMiddleware, getMessageThread);
router.post('/mock-support-reply', authMiddleware, replyToMessage);

module.exports = router;