const express = require('express');
const port = 5000;
const { initializeDatabase } = require('./config/database');
const routes = require('./routes');
const app = express();

require('./config/handlebars')(app);

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App is listening on port ${port}`));
    }).catch((err) => {
        console.log('Cannot connect to db: ', err);
    })

