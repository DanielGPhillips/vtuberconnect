const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const profileSchema = new Schema({    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    profileBanner: String,
    vtuber: {
        type: Boolean,
        default: false,
    },
    vtuberId: {
        type: Schema.Types.ObjectId,
        ref: 'Vtuber',
    },
    artist: {
        type: Boolean,
        default: false,
    },
    artistId: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
    },
    primaryTag: String,
    primaryPlatform: String,
    primaryLanguage: String,
    about: String,
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;