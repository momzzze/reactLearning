const router = require('express').Router();
const { Movie } = require('../models/Movie');

router.get('/', async (req, res) => {
    const movies = await Movie.find().lean();
    // moviesResult.forEach(movie => {
    //     console.log(movie.getInfo());
    //     console.log(movie.isNew);
    // });
    //const movies = await moviesResult.lean();
    res.render('movies', { movies });
});



router.get('/create', (req, res) => {
    res.render('createMovie')
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    //let movie = new Movie(req.body);
    // movie.title = req.body.title;
    // movie.year=req.body.year

    let savedMovie = await Movie.create(req.body);
    res.redirect('/movies');
});
router.get('/:movieId', async (req, res) => {
    let movie = await Movie.findOne({ _id: req.params.movieId }).lean();
    // let movie = await Movie.findById(req.params.movieId);
    res.render('movieDetails', { movie })
})


module.exports = router;