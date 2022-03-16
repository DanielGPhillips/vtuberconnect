import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userLoginInput: UserLoginInput) {
    login(userLoginInput: $userLoginInput) {
      _id
      username
      email
      profilePicture
      token      
    }
  }
`;

export const ADD_USER = gql`
  mutation signUp($signUpInput: SignUpInput) {
    signUp(signUpInput: $signUpInput) {
      token
      _id
      username
      email      
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($userId: ID!, $profileInput: ProfileInput) {
    addProfile(userId: $userId, profileInput: $profileInput) {
      username
      profilePicture
      profileBanner
      primaryTag
      primaryPlatform
      primaryLanguage
      about
    }
  }
`;

export const ADD_PFP = gql`
  mutation addPfp($userId: ID! $profilePicture: String!) {
    addPfp(userId: $userId, profilePicture: $profilePicture) {
      profilePicture
    }
  }
`;

export const ADD_PROFILEBANNER = gql`
  mutation addProfileBanner($userId: ID! $profileBanner: String!) {
    addProfileBanner(userId: $userId, profileBanner: $profileBanner) {
      profileBanner
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput) {
    createPost(createPostInput: $createPostInput) {
      id
      author {
        _id
        username
        profilePicture
      }
      body
      imageFlag
      image
    }
  }
`;


