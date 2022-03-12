const { default: mongoose } = require('mongoose');
const {Schema, model} = require('mongoose');

const profileSchema = new Schema({    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    profilePicture: {
        type: String,
        default: "https://"
    },
    profileBanner: {
        type: String,
        default: "https://"
    },
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
    followers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    FollowersCount: Number,
    following: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    followingCount: Number,
    posts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        }
    ],
    conversations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Conversation'
        }
    ],
});

const Profile = model('Profile', profileSchema);

model.exports = Profile;