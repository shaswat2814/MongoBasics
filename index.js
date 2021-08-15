const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!!!");
    })
    .catch(err => {
        console.log("Oh!Error");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie',movieSchema);//a class Moview is created which can be instanced and added to the database.
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' }); //if an instance is created we need to manually save that instance in the database using .save() method!

// Movie.insertMany([
//     { title: "Shawshank Redemption", year: 1998, score: 9.8, rating: 'R' },
//     { title: "The dark night", year: 2011, score: 8.9, rating: 'R' },
//     { title: "The dark night rises", year: 2014, score: 8.8, rating: 'R' },
//     { title: "Interstellar", year: 2014, score: 8.7, rating: 'R' },
// ])
//     .then((data) => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })