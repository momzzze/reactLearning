const express = require('express');
const expressSession = require('express-session');
const password = 'mysecretpassword';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashedpass = '$2b$10$gwLcqyeg4T1p3Lh5TKYJoOBaeSBgoCJ5S4bxirrs11d7dMV8.5JOK';
const jwt = require('jsonwebtoken');
const secret = 'Mysupersecret';


const app = express();


app.use(expressSession({
    secret: 'keyboard  cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/hash/:password?', async (req, res) => {
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);
    const hash = await bcrypt.hash(req.params.password, salt);
    console.log(hash);
    res.send(hash);

});
app.get('/login/:password?', async (req, res) => {
    const isValid = await bcrypt.compare(req.params.password, hashedpass);

    if (isValid) {
        const payload = { username: 'Pesho' };
        const options = { expiresIn: '2d' };
        const token = jwt.sign(payload, secret, options);

        res.send(token);
    } else {
        res.send('Invalid login');
    }
});

app.get('/', (req, res) => {
    req.session.username = 'Pesho';
    res.send('Hello world!');
});

app.get('/verify/:token', (req, res) => {
    let decodedToken = jwt.verify(req.params.token, secret);
    res.json(decodedToken);
})


app.listen(5000, () => console.log('Server is listening on port 5000'));