const { Schema, model } = require('mongoose');

const artistSchema = new Schema({
    id: {
        type: String,
    },

});

const Artist = model('Artist', ArtistSchema);

model.exports = Artist;