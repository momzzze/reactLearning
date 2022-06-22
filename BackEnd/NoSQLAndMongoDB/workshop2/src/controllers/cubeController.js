const router = require('express').Router();
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware');



router.get('/create', isAuth, (req, res) => {
    res.render('create');
});


router.post('/create', isAuth, (req, res) => {
    const cube = req.body;
    cube.owner = req.user._id;
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
    const isOwner = cube.owner == req.user?._id
    res.render('details', { cube, isOwner });
});
router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAll().lean();

    res.render('accessory/attach', { cube, accessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;
    await cubeService.attachAccessory(req.params.cubeId, accessoryId);
    res.redirect(`/cube/details/${req.params.cubeId}`)
});

router.get('/:cubeId/edit', async (req, res) => {


    const cube = await cubeService.getOne(req.params.cubeId).lean();
    if (cube.owner != req.user._id) {
        return res.redirect('/404');
    }
    cube[`difficultyLevel${cube.difficultyLevel}`] = true;
    if (!cube) {
        return res.redirect('/404');
    }

    res.render('cube/edit', { cube });
});
router.post('/:cubeId/edit', isAuth, async (req, res) => {
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);

    res.redirect(`/cube/details/${modifiedCube._id}`);
});
router.get('/:cubeId/delete', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    res.render('cube/delete', { cube })
});
router.post('/:cubeId/delete', async (req, res) => {

    await cubeService.delete(req.params.cubeId);

    res.redirect('/');
});
module.exports = router;