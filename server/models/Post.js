const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    body: {
      type: String,
      maxlength: 200,
      minlength: 5,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
    isLiked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User',
      }
    ],
    likeCount: Number,
    cringes: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User'
      }
    ],
    cringeCount: {
      type: Number,
      default: 0,
    },
    shareCount: {
      type: Number,
      default: 0,
    },
    imageFlag: {
      type: Boolean, 
      default: false,
    },
    image: String,
});

const Post = model('Post', postSchema);

model.exports = Post;