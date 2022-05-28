const express = require('express');

const app = express();

const cats = [];


//Action
app.get('/', (req, res) => {
    // res.write("Hello from js.");
    // res.end();
    res.send('Hello world! from express.');
});
app.get('/cats', (req, res) => {
    if (cats.length > 0) {
        res.send(cats.join(', '));
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

app.post('/cats/:catName', (req, res) => {
    //TODO: implement posting cat
    cats.push(req.params.catName);

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