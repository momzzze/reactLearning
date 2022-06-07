const express = require('express');
const hbs = require('express-handlebars');
const { MongoClient } = require('mongodb');
const port = 5000;

const app = express();
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


client.connect().then(() => {
    console.log('DB connected');
});
const db = client.db('movieSuggester');
const movieCollection = db.collection('Movies');

app.engine('hbs', hbs.engine({ extname: 'hbs' }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/movies', async (req, res) => {
    let movies = await movieCollection.find().toArray();
    res.render('movies', { movies });
})

app.listen(port, () => console.log(`Server is listening onn ${port}`));