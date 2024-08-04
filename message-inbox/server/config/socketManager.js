const userSockets = new Map(); // In-memory store for user socket IDs

const addSocket = (userId, socketId) => {
    userSockets.set(userId, socketId);
};

const removeSocket = (socketId) => {
    for (let [userId, id] of userSockets.entries()) {
        if (id === socketId) {
            userSockets.delete(userId);
            break;
        }
    }
};

const getSocketIdForUser = (userId) => {
    return userSockets.get(userId);
};

module.exports = {
    addSocket,
    removeSocket,
    getSocketIdForUser
};