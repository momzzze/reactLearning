const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        minlength: 2,
        maxlength: 20
    },
    description: String,
    genres: {
        type: String,
        enum: ['action', 'comedy', 'thriler', 'drama']
    },
    imageUrl: String,
    year: {
        type: Number,
        min: [1888, 'The year {VALUE} should not be higher than 1888']

    }
});
// movieSchema.method('getInfo', function () {
//     return `${this.title} - ${this.description || 'n/a'}`;
// });
movieSchema.methods.getInfo = function () {
    return `${this.title} - ${this.description || 'n/a'}`;
};

movieSchema.virtual('isNew')
    .get(function () {
        return this.year >= 2020;
    });

movieSchema.path('title').validate(function () {
    return this.title.length >= 2 && this.title.length <= 20;
}, `This movie title should be less than 20 chars and more than 2!`)
const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = Movie;