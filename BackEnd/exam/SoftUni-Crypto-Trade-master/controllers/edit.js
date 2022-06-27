const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor, isAuthorized } = require('../middlewares/guards');
const publicationService = require('../services/publication');
const mapErrors = require('../util/errorMapper');

router.get('/edit/:id', checkSession, checkIfLogged, isAuthor, isAuthorized, async (req, res, next) => {
    res.locals.title = 'Edit ' + res.locals.publication.title;
    const id = req.params.id;
    const publication = await publicationService.getPublication(id);
    res.locals.publication;
    res.locals[publication.paymentMethod] = true;
    res.render('edit');
});

router.post('/edit/:id', checkSession, checkIfLogged, isAuthor, isAuthorized, async (req, res, next) => {
    const id = req.params.id;
    try {
        const publication = await publicationService.editPublication(req.body, id);
        res.locals[publication.paymentMethod] = true;
        res.redirect('/crypto/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        const publication = await publicationService.getPublication(id);
        res.locals.title = 'Edit ' + res.locals.publication.title;
        res.locals.errors = errors;
        res.render('edit');
    }
});

module.exports = router;