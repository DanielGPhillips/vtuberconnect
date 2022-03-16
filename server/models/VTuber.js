const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const vtuberSchema = new Schema({
    isUser: {
        type: Boolean,
        default: false,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    links: Array,
    modelImage: {
        type: String,
        default: "https://",
    },
    species: String,
    gender: String,
    group: String,
    mainGenre: String,
    debutDate: Date,
    modelType: String,
    modelArtist: String,
    modelRigger: String,
    realtedVtubers: Array,
    lore: String,
});

const Vtuber = model('Vtuber', vtuberSchema);

module.exports = Vtuber;