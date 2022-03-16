const bcrypt = require('bcrypt');
const { UserInputError, AuthenticationError } = require('apollo-server-express');

const { User } = require('../../models');
const { generateToken } = require('../../utils/auth'); 
const {
    validateSignUpInput,
    validateLogInInput 
} = require('../../utils/validators');

module.exports = {
    Mutation: {
        async signUp(_, {signUpInput: {username, email, password, confirmPassword}}){        
          
            const { valid, errors } = validateSignUpInput(
                username,
                email,
                password,
                confirmPassword
            );
            if (!valid) {
                throw new UserInputError('Errors', { errors });
            };

            const usernameAttempt = await User.findOne({ username });
            if (usernameAttempt) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    },
                    });
            };
            const userEmailAttempt = await User.findOne({ email });
            if (userEmailAttempt) {
                throw new UserInputError('Email is taken', {
                    errors: {
                        email: 'This email is already in use.'
                    },
                });
            };

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
    
        async login(_, { userLoginInput: { email, password } }) {
          const {errors, valid } = validateLogInInput(email, password);
    
          if (!valid) {
            throw new UserInputError('Errors', { errors })
          }
    
          const user = await User.findOne({ email });
    
          if(!user) {
            errors.general = 'Email or password were incorrect';
            throw new UserInputError('Email or password were incorrect', { errors })
          }
          const match = await bcrypt.compare(password, user.password);

          if (!match) {
            errors.general = 'Email or password were incorrect';
            throw new UserInputError('Email or password were incorrect', { errors});
          }
    
          const token= generateToken(user);
    
          return { 
              ...user._doc,
              id: user._id,
              token
           };
        },

        async addPfp(_,{ userId, profilePicture }, context) {
            if (context.user) {
                const filter = { _id: userId };
                const update = { profilePicture: profilePicture};
                const opts = { new: true };
                return User.findOneAndUpdate(filter, update, opts);
            }
            throw new AuthenticationError('You need to be logged in to do this.')
        },

        async addProfileBanner(_,{ userId, profileBanner }, context) {
            if (context.user) {
                const filter = { _id: userId };
                const update = { profileBanner: profileBanner};
                const opts = { new: true };
                return User.findOneAndUpdate(filter, update, opts);
            }
            throw new AuthenticationError('You need to be logged in to do this.')
        }
    }
}