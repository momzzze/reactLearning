const express = require('express');
const fs = require('fs');
const path = require('path');

const handlebars = require('express-handlebars');
const { catMiddleware } = require('./middlewares');

const users = [
    { name: 'Pesho', age: 20 },
    { name: 'Gosho', age: 25 },
    { name: 'Miro', age: 30 },
];

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');


app.use('/public', express.static('public'));


//Action
app.get('/:name?', (req, res) => {
    // res.write("Hello from js.");
    // res.end();
    // res.send('Hello world! from express.');
    res.render('home', {
        name: req.params.name || 'Guest',
        users,
        isAuth: true,
    });
});

// app.get('/img/:imgName', (req, res) => {
//     res.sendFile(path.resolve('./public/img', req.params.imgName));
// });


app.get('/cats', catMiddleware, (req, res) => {
    if (req.cats.length > 0) {
        res.send(req.cats.join(', '));
    } else {
        res.send('No cats here!');
    }
});

app.get('/cats/:catId(\\d+)', (req, res) => {
    let catId = Number(req.params.catId);
    res.send(cats[catId]);
});

app.get('/cats/:catName', (req, res) => {
    //TODO
    // res.send()
});

app.post('/cats/:catName', catMiddleware, (req, res) => {
    //TODO: implement posting cat
    req.cats.push(req.params.catName);

    res.send(`Add ${req.params.catName} to the collection`);
    console.log(cats);
});
app.post('/cats', (req, res) => {
    //TODO: implement posting cat

    res.send('Add new cat!');
});

app.put('/cats', (req, res) => {
    //TODO: implement

    res.send('Modify existing cat');
});
app.get('/download', (req, res) => {
    res.download('./sample.pdf');
})
app.get('/redirect', (req, res) => {
    res.redirect('/cats');
})


app.all('*', (req, res) => {
    res.status(404);
    res.send('Cannot find this page!');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));