const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor } = require('../middlewares/guards');
const publicationService = require('../services/publication');

router.get('/search', checkSession, async (req, res, next) => {
    res.locals.title = 'Search crypto';
    const publications = await publicationService.getAllPublications();
    res.locals.publications = publications;
    res.render('search');
});

router.get('/search-crypto', checkSession, async (req, res, next) => {
    res.locals.title = 'Results of search';
    const { title, paymentMethod } = req.query;
    const publications = await publicationService.searchPublications(title, paymentMethod);
    res.locals.publications = publications;
    res.render('search');
});

module.exports = router;