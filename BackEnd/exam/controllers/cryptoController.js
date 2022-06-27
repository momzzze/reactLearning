const { isAuth } = require('../middlewares/authMiddleware');
const cryptoService = require('../services/cryptoService');
const { getErrorMessage } = require('../utils/errorHelpers');
const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('crypto/create');
});



router.post('/create', isAuth, async (req, res) => {
    try {
        const cryptoCoin = await cryptoService.create({ ...req.body, owner: req.user._id });
        res.redirect('/');
    } catch (error) {
        res.render('crypto/create', { ...req.body, error: getErrorMessage(error) })
    }
});

router.get('/catalog', async (req, res) => {
    const cryptoCoins = await cryptoService.getAll().lean();
    res.render('crypto/catalog', { cryptoCoins });
});
router.get('/:cryptoId/details', async (req, res) => {
    const crypto = await cryptoService.findOne(req.params.cryptoId).lean();
    const isOwner = crypto.owner._id == req.user?._id;

    res.render('crypto/details', { crypto, isOwner });
});
router.get('/:cryptoId/delete', isAuth, async (req, res) => {
    await cryptoService.delete(req.params.cryptoId);
    res.redirect('/');
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    res.render('crypto/edit')
})
router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    await cryptoService.update(req.params.cryptoId, req.body);

    res.redirect('/')
})
module.exports = router;