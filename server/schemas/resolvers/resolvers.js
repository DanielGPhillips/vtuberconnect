
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { UserInputError } = require('apollo-server-express');

const { User, Profile, Post } = require('../../models');
const generateToken = require('../../utils/auth'); 

const resolvers = {
  Query: {
    async profiles() {
      try {
        return Profile.find()
      } catch (err) {
        throw new Error(err)
      }
    },

    async profile(parent, { profileId }) {
      try {
        return Profile.findOne({ _id: profileId })
      } catch (err) {
        throw new Error(err)
      }
    },
  
    async getPosts() {
      try {
        return Post.find();
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async signUp(_, {signUpInput: {username, email, password, confirmPassword}}){
      password = await bcrypt.hash(password, 10);

      const newUser = await new User({
        username,
        email,
        password,
        dateCreated: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    },

    // async login(_, { email, password }) {
    //   const {errors, valid } = validateLoginINput(email, password);

    //   if (!valid) {
    //     throw new UserInputError('Errors', { errors })
    //   }

    //   const user = await User.findOne({ email });

    //   if(!user) {
    //     errors.general = 'Email or password were incorrect';
    //     throw new UserInputError('Email or password were incorrect', { errors })
    //   }
    //   const match = await bcrypt.compare(password, user.password);
    //   if (!match) {
    //     errors.general = 'Email or password were incorrect';
    //     throw new UserInputError('Email or password were incorrect', { errors});
    //   }

    //   const token= generateToken(user);

    //   return {
    //     ...user._doc,
    //     id: user._id,
    //     token
    //   };
    // },

    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;