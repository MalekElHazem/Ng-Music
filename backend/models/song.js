const mongoose = require('mongoose');


const Song = mongoose.model( 'Song' , {

    name: String,
    artist: String,
    album: String,
    year: Number,
    image: String

} );

module.exports = Song;