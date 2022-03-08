const { default: mongoose } = require('mongoose');
const {Schema, model} = require('mongoose');

const artistSchema = new Schema({
    isUser: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    newTuberOptIn: {
        type: Boolean,
        default: false,
    },
    links: {
        type: Array
    },
    open: {
        type: Boolean,
        default: false,
    }, 
    slots: {
        type: Number,
        default: 0,
    },
    offerings: String,
    prefStyle: String,
    prefGender: String,
    nsfw: {
        type: Boolean,
        default: false,
    },
    exclusions: String,
    turnAroundTime: String,
    prefPayType: Array,
    contactMethod: String,
    contactData: String,
    portfolioImages: Array, 
    terms: String,
    pricing: String,
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
});

const Artist = model('Artist', artistSchema);

model.exports = Artist;