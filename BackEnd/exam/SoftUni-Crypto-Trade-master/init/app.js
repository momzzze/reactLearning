const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const connectToDB = require('./db');
const configRoutes = require('./routes');

async function start(app) {
    await connectToDB();

    app.use(express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //app.use(cookieParser());
    app.use(session({
        secret: 'qmionwegbwowpfwqgbqwbgqw',
        saveUninitialized: true,
        cookie: { secure: 'auto', httpOnly: true },
        resave: false,
    }));

    await configRoutes(app);

    const port = 3000;

    const hbs = handlebars.create({
        extname: '.hbs'
    });

    app.use(express.static('public'));
    app.engine('.hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.listen(port, () => {
        console.log(`Running on http://localhost:${port}`);
    });
}

module.exports = start;