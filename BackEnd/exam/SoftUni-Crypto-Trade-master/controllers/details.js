const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor } = require('../middlewares/guards');
const publicationService = require('../services/publication');

const { hasBought, canBuy, } = require('../middlewares/buy');

router.get('/crypto/:id', checkSession, isAuthor, hasBought, async (req, res, next) => {
    const id = req.params.id;
    const publication = await publicationService.getPublication(id);
    res.locals.title = publication.title;
    res.render('details');
});

module.exports = router;