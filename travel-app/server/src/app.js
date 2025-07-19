const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const cors = require('cors');
const router = require('./routers/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

app.use(errorHandler);

module.exports = app;
