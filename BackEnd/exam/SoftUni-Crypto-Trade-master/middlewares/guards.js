const publicationService = require("../services/publication");

async function checkIfLogged(req, res, next) {
    const user = req.session.user;

    if (!user) {
        res.redirect('/login');
    } else {
        next();
    }
}

async function checkSession(req, res, next) {
    const user = req.session.user;
    if (user) {
        res.locals.user = user;
    }

    next();
}

async function isAuthor(req, res, next) {
    const user = req.session.user;
    let userId;
    if (user) {
        userId = user._id;
    }

    const id = req.params.id;

    try {
        const publication = await publicationService.getPublication(id);
        res.locals.isAuthor = publication.author.toString() === userId;
        res.locals.publication = publication;
        next();
    } catch (err) {
        res.redirect('/page-not-found');
        res.end();
    }
}

async function isAuthorized(req, res, next) {
    const isAuthor = res.locals.isAuthor;
    if (!isAuthor) {
        res.redirect('/');
        res.end();
    } else {
        next();
    }
}

module.exports = {
    checkSession,
    checkIfLogged,
    isAuthor,
    isAuthorized,
}