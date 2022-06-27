const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor } = require('../middlewares/guards');
const publicationService = require('../services/publication');

const { hasBought, canBuy, } = require('../middlewares/buy');

router.get('/buy/:id', checkSession, isAuthor, hasBought, canBuy, async (req, res, next) => {
    const id = req.params.id;
    const publication = await publicationService.buyCrypto(id, req.session.user._id);    
    res.redirect('/crypto/' + id);
});

module.exports = router;