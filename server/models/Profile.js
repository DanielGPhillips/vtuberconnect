const { default: mongoose } = require('mongoose');
const {Schema, model} = require('mongoose');

const profileSchema = new Schema({    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    profileImage: {
        type: String,
        default: "https://"
    },
    bannerImage: {
        type: String,
        default: "https://"
    },
    vtuber: {
        type: Boolean,
        default: false,
    },
    vtuberId: {
        type: String,
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
    about: {
        type: String,
        default: "This user has chosen to stay mysterious."
    },
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
    associatedTags: Array,
    likeCount: Number,
    cringeCount: Number,
});

const Profile = model('Profile', profileSchema);

model.exports = Profile;