const publicationService = require('../services/publication');

async function hasBought(req, res, next) {
    const user = req.session.user;
    let userId;
    if (user) {
        userId = user._id;
    }
    
    const publicationId = req.params.id;
    
    const publication = await publicationService.getPublication(publicationId);
    const buyers = publication.buyers.map(id => id.toString());
    res.locals.hasBought = res.locals.isAuthor || buyers.includes(userId);
    next();
}

async function canBuy(req, res, next) {
    if (!res.locals.hasBought) {
        next();
    } else {
        res.redirect('/');
        res.end();
    }
}

module.exports = {
    hasBought,
    canBuy,
}