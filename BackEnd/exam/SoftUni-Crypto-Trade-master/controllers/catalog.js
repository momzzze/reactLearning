const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor } = require('../middlewares/guards');
const publicationService = require('../services/publication');

router.get('/all', checkSession, async (req, res, next) => {
    res.locals.title = 'All crypto'

    const publications = await publicationService.getAllPublications();
    res.locals.publications = publications;
    res.render('all');
});

module.exports = router;