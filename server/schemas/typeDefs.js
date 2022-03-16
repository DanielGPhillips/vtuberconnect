const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String!
    email: String!
    profilePicture: String
    token: String!
    dateCreated: String!
    profileBanner: String
    vtuber: Boolean
    vtuberId: Vtuber
    artist: Boolean
    artistId: Artist
    primaryTag: String
    primaryPlatform: String
    primaryLanguage: String
    about: String
    followers: [User]
    followersCount: Int
    following: [User]
    followingCount: Int
    posts: [Post]
  }

  input SignUpInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }
  
  type Profile {
    id: ID!
    userId: User!
    
  }

  input ProfileInput {
    primaryTag: String
    primaryPlatform: String
    primaryLanguage: String
    about: String
  }

  type Vtuber {
    id: ID!
    isUser: Boolean
    userId: User    
    links: [String]
    modelImage: String
    species: String
    gender: String
    group: String
    mainGenre: String
    debutDate: Date
    modelType: String
    modelArtist: String
    modelRigger: String
    realtedVtubers: [String]
    lore: String
  }

  input VtuberInput {    
    links: [String]
    modelImage: String
    species: String
    gender: String
    group: String
    mainGenre: String
    debutDate: Date
    modelType: String
    modelArtist: String
    modelRigger: String
    realtedVtubers: [String]
    lore: String
  }

  type Artist {
    id: ID!
    isUser: Boolean
    userId: User
    newTuberOptIn: Boolean
    links: [String]
    commsOpen: Boolean
    slots: Int
    offerings: String
    prefStyle: String
    prefGender: String
    nsfw: Boolean
    exclusions: String
    turnAroundTime: String
    prefPayType: String
    contactMethod: String
    contactData: String
    terms: String
    pricing: String
    portfolioImages: [String] 
    reviews: [Review]
  }

  input ArtistInput {
    newTuberOptIn: Boolean
    links: [String]
    commsOpen: Boolean
    slots: Int
    offerings: String
    prefStyle: String
    prefGender: String
    nsfw: Boolean
    exclusions: String
    turnAroundTime: String
    prefPayType: String
    contactMethod: String
    contactData: String
    terms: String
    pricing: String
  }

  type Post {
    id: ID!
    author: User!
    dateCreated: Date!
    body: String!
    comments: [Comment]
    commentCount: Int
    isLiked: Boolean
    likes: [User]
    likeCount: Int
    causedCringe: Boolean
    cringes: [User]
    cringeCount: Int
    shareCount: Int
    imageFlag: Boolean
    image: String
  }

  input CreatePostInput {
    body: String!
    imageFlag: Boolean!
    image: String
  }

  type Comment {
    id: ID!
    author: User!
    parentPost: Post!
    body: String!
    subComments: [Comment]
    subCommentCount: Int
    isliked: Boolean
    likes: [User]
    likeCount: Int
    causedCringe: Boolean
    cringes: [User]
    cringeCount: Int
    imageFlag: Boolean
    image: String
    editFlag: Boolean
    dateEdited: Date
  }

  type Review {
    id: ID!
    author: User!
    parentArtist: Artist!
    dateCreated: Date!
    rating: Float!
    body: String!
    isLiked: Boolean,
    likes: [User]
    likeCount: Int
    causedCringe: Boolean
    cringes: [User]
    cringeCount: Int
    imagesFlag: Boolean
    image: String
    editFlag: Boolean
    dateEdited: Date
  }

  type Query {
    getProfiles: [User]
    getProfile(userId: ID!): User
    getProfileSelf: User
    getUserPosts(userId: ID): [Post]
    getFollowedPosts(userId: ID!): [User]
    getPost(userId: ID!): Post
    getPosts: [Post]
    getArtists: [Artist]
    getVtubers: [Vtuber]
  }

  type Mutation {
    signUp(signUpInput: SignUpInput): User!
    createProfile(userId: ID!, profileInput: ProfileInput): User!
    addPfp(userId: ID!, profilePicture: String!): User
    addProfileBanner(userId: ID!, profileBanner: String!): User
    createArtist(artistInput: ArtistInput): Artist!
    createVtuber(vtuberInput: VtuberInput): Vtuber!
    login(userLoginInput: UserLoginInput ): User!
    createPost(createPostInput: CreatePostInput): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    getComments(postId: String!): Post
    deleteComment(postId: String!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    cringePost(postId: ID!): Post!
    removeUser(userId: ID!): User
  }

  type Subscription {
    newPost: Post!
  }
`;

module.exports = typeDefs;
