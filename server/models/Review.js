const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    body: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    parentArtistFlag: {
      Type: Boolean,
      default: false,
    },
    parentArtistId: {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
    dateCreated: {
      type: Date,
      default: Date.now
    },
    comments: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Comment',
      }
    ],
    commentCount: {
      type: Number,
      default: 0,
    },
    useful: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User',
      }
    ],
    usefulCount: {
      type: Number,
      default: 0,
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