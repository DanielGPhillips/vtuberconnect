const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    parentArtist: {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
    dateCreated: {
      type: Date,
      default: Date.now
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    body: String,
    isliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User',
      }
    ],
    likeCount: {
      type: Number,
      default: 0,
    },
    causedCringe: {
      type: Boolean,
      default: false,
    },
    cringes: [
      {
      type: Schema.Types.ObjectId,
      ref: 'users'
      }
    ],
    cringeCount: {
      type: Number,
      default: 0,
    },
    imagesFlag: {
        type: Boolean,
        default: false,
    },
    image: String,
    editFlag: {
        type: Boolean,
        default: false,
    },
    dateEdited: {
        type: Date,
        default: Date.now,
    }
});

const Review = model('Review', reviewSchema);

model.exports = Review;