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
const amadeus = new Movie({title:'Amadeus',year:1988,score:9.2,rating:'R'});

