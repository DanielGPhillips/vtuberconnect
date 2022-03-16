const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../../models');

const { Post } = require('../../models/');
const checkAuth = require('../../utils/checkAuth');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
                throw new Error(err)
            }
        },
        // takes user id to lock in User so that we can grab following from that user
        // from following array, iterate over each user to get posts
        // drill into posts of each individual user to get necessary post data to render
        // 
        // async getFollowedPosts(_, { userId }, context) {
        //     const user = await User.findById(userId);
        //     const following = await user.following
        //     following.forEach((User.posts) => {
        //         const posts=  await Post.find().sort({dateCreated: -1})
        //     });
            
        //     return posts;
        // },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (post) {
                    return post;
                } else {
                    throw new Error('Post not found');
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async createPost(_, { body }, context) {
            const user = checkAuth(context);

            if (body.trim() === '') {
                throw new Error("Post must not be empty!")
            }

            const newPost = new Post({
                body,
                author: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });

            const post = await newPost.save();

            context.pubsub.publish('NEW_POST', {
                newPost: post
            });

            return post;
        },
        async deletePost(_, { postId }, context) {
            const user = checkAuth(context);

            try {
                const post =  await Post.findbyId(postId);
                if (user.username === post.username) {
                    await post.delete();
                    return 'Post deleted successfully';
                } else {
                    throw new AuthenticationError('Cannot delete other users posts');
                } 
            } catch (err) {
                    throw new Error(err);
            }            
        },
        async likePost(_, { postId }, context) {
            const { username } = checkAuth(context);
            
            const post = await Post.findById(postId);
            if (post) {
                if (post.likes.find((like) => like.username === username)) {
                    post.likes = post.likes.filter((like) => like.username !== username);
                } else {
                    post.likes.push({
                        userId,
                        username,
                        dateCreated: new Date().toISOString()
                    });
                }
                
                await post.save();
                return post;
            } else throw new UserInputError('Post not found');            
        },
        async cringePost(_, { postId }, context) {
            const { username } = checkAuth(context);
            
            const post = await Post.findById(postId);
            if (post) {
                if (post.cringes.find((cringe) => cringe.username === username)) {
                    post.cringes = post.cringes.filter((cringe) => cringe.username !== username);
                } else {
                    post.cringes.push({
                        userId,
                        username,
                        dateCreated: new Date().toISOString()
                    });
                }
                
                await post.save();
                return post;
            } else throw new UserInputError('Post not found');            
        },
    },
    Subscription: {
        newPost: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_POST')
        }
    }
};