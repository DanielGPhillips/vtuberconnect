const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    parentPost: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    dateCreated: {
      type: Date,
      default: Date.now
    },
    body: {
      type: String,
    },
    subComments: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Comment',
      }
    ],
    subCommentCount: {
      type: Number,
      default: 0,
    },
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
    imageFlag: {
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

const Comment = model('Comment', commentSchema);

module.exports = Comment;