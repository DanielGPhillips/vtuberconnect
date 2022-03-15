import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

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


