const userConnections = new Map();

//Create a on "connection" for the Io Object socket
const createSocketConnection = (socketIoObject, socketEmit) => {
    socketIoObject.on("connection", (socket) => {
        const {
            userId
        } = socket;
        //CONNECT THE USER ID TO ITS SOCKET ID ALL OTHER LOGIC SHOULD GO BELLOW THIS!!!
        handleUserJoin(userId, socket.id);

        socketEmit(userId, "private_message", userId);

        socket.on("disconnect", () => {
            handleUserLeave(userId, socket.id);
        });
    });
};
const handleUserJoin = (userId, socketId) => {
    if (!userId) return;

    if (userConnections.has(userId)) {
        userConnections.get(userId).push(socketId);
    } else {
        userConnections.set(userId, [socketId]);
    }
};

const handleUserLeave = (userId, socketId) => {
    if (!userId || !userConnections.has(userId)) return;
    const connections = userConnections
        .get(userId)
        .filter((id) => id !== socketId);
    if (connections.length > 0) {
        userConnections.set(userId, connections);
    } else {
        userConnections.delete(userId);
    }
};

const createSocketEmit = (socketIoObject) => {
    return (userId, channel, message) => {
        const connections = userConnections.get(Number(userId));
        if (!connections) return;

        connections.forEach((socketId) => {
            socketIoObject.to(socketId).emit(channel, message);
        });
    };
};

module.exports = {
    createSocketConnection,
    createSocketEmit
};