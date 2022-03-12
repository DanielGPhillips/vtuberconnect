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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
        token
      }
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
  }`;


