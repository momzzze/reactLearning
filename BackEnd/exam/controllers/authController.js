const router = require('express').Router();
const authService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHelpers');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/env');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.login(email, password);
    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);
    if (isValid) {
        const token = await authService.createToken(user);
        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const { password, repeatPassword, ...userData } = req.body;

    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Password missmatch ' })
    }

    try {
        const createdUser = await authService.create({ password, ...userData });
        const token = await authService.createToken(createdUser);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true })
        res.redirect('/');

    } catch (error) {
        // Add error mapper
        return res.render('auth/register', { error: getErrorMessage(error) })

    }

    console.log(req.body);

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/');
});

module.exports = router;