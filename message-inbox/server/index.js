require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/db");
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
const router = require('./routes/index');
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

        // Start server after database sync
        const server = http.createServer(app);
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database or starting server:', error);
    });