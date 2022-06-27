const auth = require('../controllers/auth');
const home = require('../controllers/home');
const details = require('../controllers/details');
const create = require('../controllers/create');
const deletePublication = require('../controllers/delete');
const edit = require('../controllers/edit');
const all = require('../controllers/catalog');
const buy = require('../controllers/buy');
const search = require('../controllers/search');

async function configRoutes(app) {
    app.use(auth);
    app.use(home);
    app.use(details);
    app.use(create);
    app.use(deletePublication);
    app.use(edit);
    app.use(all);
    app.use(buy);
    app.use(search);
    app.get('*', (req, res, next) => {
        if (req.url !== '/page-not-found') {
            res.redirect('/page-not-found');
        } else {
            res.render('404', {
                user: req.session.user,
                title: '404 Not Found',
            });
        }
    })
}

module.exports = configRoutes;