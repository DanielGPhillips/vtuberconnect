const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    creationDate: {
      type: Date,
      default: Date.now
    },
    comments: [
      {
        body: String,
        username: String,
        createdAt: String
      }
    ],
    likes: [
      {
        username: String,
        createdAt: String
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
});

const Post = model('Post', postSchema);

model.exports = Post;