const router = require('express').Router();
const { checkSession, checkIfLogged, isAuthor, isAuthorized } = require('../middlewares/guards');
const publicationService = require('../services/publication');

router.get('/delete/:id', checkSession, checkIfLogged, isAuthor, isAuthorized, async (req, res, next) => {
    const id = req.params.id;
    const publication = await publicationService.deletePublication(id);
    
    res.redirect('/all');
    res.end();
});

module.exports = router;