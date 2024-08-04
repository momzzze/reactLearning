require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const {
    Server
} = require('socket.io');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/db");
const router = require('./routes/index');
const jwt = require('jsonwebtoken');
const {
    createSocketConnection,
    createSocketEmit
} = require("./socket");

// Create an Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "js")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Import and use routes
app.use(router);

// Database authentication and sync
db.authenticate()
    .then(() => {
        console.log("Database connected");

        // Sync models with `alter` option
        return db.sync({
            alter: true
        });
    })
    .then(() => {
        console.log('Database & tables synchronized!');

        // Create HTTP server
        const server = http.createServer(app);

        // Start the server after everything is set up
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database or starting server:', error);
    });
const verifySocketToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    })
};


const verifySocketConnection = async (socket, next) => {
    const token = socket.handshake.auth.token || socket.handshake.headers['authorization'];
    console.log('Received token:', token); // Log the received token

    if (!token) {
        console.log('No token provided');
        return next(new Error('Authentication error'));
    }

    try {
        const decoded = await verifySocketToken(token);
        console.log('Decoded token:', decoded);
        console.log('====================================');
        console.log('decoded', decoded);
        console.log('===================================='); // Log the decoded token
        socket.userId = decoded.id;
        next();
    } catch (err) {
        console.log('Token verification error:', err); // Log the error
        next(new Error('Authentication error'));
    }
}

const io = new Server({
    cors: {
        origin: '*',
        methods: '*',
        credentials: true,
    },
});

io.use(verifySocketConnection);

const socketEmit = createSocketEmit(io);
createSocketConnection(io, socketEmit);

module.exports.emit = socketEmit;

app.set("socket", io);
io.listen(8001);