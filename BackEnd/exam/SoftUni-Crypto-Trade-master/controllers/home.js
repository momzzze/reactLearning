const { checkSession } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/', checkSession, async (req, res, next) => {
    res.locals.title = 'Home',

    res.render('home');
});

module.exports = router;