const router = require('express').Router();
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');
router.get('/create', (req, res) => {
    res.render('create');
});


router.post('/create', (req, res) => {
    const cube = req.body;
    //validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }
    //save data
    cubeService.create(cube)
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            res.status(400).send(err);
        });
    //redirect to page



});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('details', { cube });
});
router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAll().lean();

    res.render('accessory/attach', { cube, accessories });
})

module.exports = router;