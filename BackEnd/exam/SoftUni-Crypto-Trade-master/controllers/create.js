const router = require('express').Router();
const mapErrors = require('../util/errorMapper');
const { checkSession, checkIfLogged, isAuthor, isAuthorized } = require('../middlewares/guards');
const publicationService = require('../services/publication');

router.get('/create', checkSession, checkIfLogged, async (req, res, next) => {
    res.locals.title = 'Trade',
    res.render('create');
});

router.post('/create', checkSession, checkIfLogged, async (req, res, next) => {
    const id = req.session.user._id;

    try {
        const publication = await publicationService.createPublication(req.body, id);
        res.redirect('/all');
    } catch (err) {
        const errors = mapErrors(err);
        res.locals.title = 'Create';
        res.locals.body = req.body;
        res.locals.errors = errors;
        res.render('create');
    }
});

module.exports = router;