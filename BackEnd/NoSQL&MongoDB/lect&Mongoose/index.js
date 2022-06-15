const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const movieController = require('./controllers/movieController');
const port = 5000;

const app = express();
const url = 'mongodb://localhost:27017/movieSuggester';

mongoose.connect(url).then(() => {
    console.log('DB Connected');
}).catch((err) => {
    console.log('DB error: ', err);
})
app.use(express.urlencoded({ extended: false }));
app.engine('hbs', hbs.engine({ extname: 'hbs' }));

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home');
});
app.use('/movies', movieController);



app.listen(port, () => console.log(`Server is listening onn ${port}`));