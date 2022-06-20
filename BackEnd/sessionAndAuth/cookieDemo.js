const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();



app.use(cookieParser());



app.get('/', (req, res) => {
    res.setHeader('Set-Cookie', 'test=some');


    // res.cookie('test', 'some test value');
    res.send('Hello world!');
});

app.get('/cats', (req, res) => {
    let cookies = req.cookies;
    console.log(cookies);
    res.send('I love cats!');
});

app.listen(5000, () => console.log('Server is listening on port 5000'));