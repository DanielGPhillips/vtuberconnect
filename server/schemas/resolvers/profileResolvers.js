const { AuthenticationError, UserInputError } = require('apollo-server-express');

const checkAuth = require('../../utils/checkAuth');
const Profile = require('../../models/Profile');
const { Artist, Vtuber, User } = require('../../models');

module.exports = {
    Query: {
        async getProfiles() {
            try {
                const profiles = await Profile.find().sort({ dateCreated: -1 });
                return profiles;
            } catch (err) {
                throw new Error(err)
            }
        },
        async getProfile(_, { profileId }) {
            try {
                const profile = await Profile.findById(profileId);
                if (profile) {
                    return profile;
                } else {
                    throw new Error('Profile not found');
                }
            } catch (err) {
                throw new Error(err)
            }
        },
        async getProfileSelf(_, args, context) {
            try {
                if (context.user) {
                    return Profile.findOne({id: context.user.id})
                }
            } catch (err) {
                throw new AuthenticationError('You need to be logged in')
            }
        }
    },
    Mutation: {
        async createProfile(_, { userId, profileInput: { primaryTag, primaryPlatform, primaryLanguage, about}}, context) {
            if (context.user) {
                const filer = { _id: userId };
                const update= { primaryTag: primaryTag, primaryPlatform: primaryPlatform, primaryLanguage: primaryLanguage, about: about};
                const opts = { new: true };
                return User.findOneAndUpdate(filter, update, opts);
            }
            throw new AuthenticationError('You need to be logged in to do this.')
        },
        
        async createArtist(_, {artistInput: {}}, context) {
            const user = checkAuth(context);

            const newArtist = new Artist({
                userId: user.id,
                newTuberOptIn,
                links,
                commsOpen,
                slots,
                offerings,
                prefStyle,
                prefGender,
                nsfw,
                exclusions,
                turnAroundTime,
                prefPayType,
                contactMethod,
                terms,
                pricing
            })

            const artist = await newArtist.save()
            return artist;
        },  

        async createVtuber(_, {vtuberInput: {}}, context) {
            const user = checkAuth(context);
            
            const newVtuber = new Vtuber({
                userId: user.id,
                links,
                modelImage,
                species,
                gender,
                group,
                mainGenre,
                debutDate,
                modelType,
                modelArtist,
                modelRigger,
                relatedVtubers,
                lore
            })

            const vtuber = await newVtuber.save()
            return vtuber;
        }
        
    }
}