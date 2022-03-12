import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($userLoginInput: UserLoginInput) {
    login(userLoginInput: $UserLoginInput) {
      id
      username
      email
      token      
    }
  }
`;

export const ADD_USER = gql`
  mutation signUp($signUpInput: SignUpInput) {
    signUp(signUpInput: $signUpInput) {
      token
      id
      username
      email      
    }
  }`;


