const router = require('express').Router();
const { checkSession, checkIfLogged } = require('../middlewares/guards');
const { register, login } = require('../services/auth');
const mapErrors = require('../util/errorMapper');

router.get('/register', (req, res) => {
    if (!req.session.user) {
        res.locals.title = 'Register';
        res.render('register');
    } else {
        res.redirect('/');
        res.end();
    }
});

router.get('/login', (req, res) => {
    if (!req.session.user) {
        res.locals.title = 'Login';
        res.render('login');
    } else {
        res.redirect('/');
        res.end();
    }
});

router.post('/register', async (req, res, next) => {
    if (!req.session.user) {
        const { username, email, password, repeat } = req.body;
        try {
            const user = await register(username, email, password, repeat);
            req.session.user = user;
            res.redirect('/');
        } catch (err) {
            const errors = mapErrors(err);
            res.locals.title = 'Register';
            res.locals.errors = errors;
            res.locals.body = req.body;
            res.render('register');
        }
    } else {
        res.redirect('/');
        res.end();
    }
});


router.post('/login', async (req, res, next) => {
    if (!req.session.user) {
        const email = req.body.email.trim();
        const password = req.body.password.trim();

        try {
            const user = await login(email, password);
            req.session.user = user;
            res.redirect('/');
        } catch (err) {
            const errors = mapErrors(err);
            res.locals.title = 'Login';
            res.locals.errors = errors;
            res.locals.body = req.body;
            res.render('login');
        }
    } else {
        res.redirect('/');
        res.end();
    }
});

router.get('/logout', checkSession, checkIfLogged, async (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
})

module.exports = router;