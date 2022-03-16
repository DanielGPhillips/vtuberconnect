//React Import
import React, { createContext, useReducer } from 'react';
// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

const AuthContext =  createContext({
  user: null,
  login: (userData) => {},
  logout: () => {}
})

function authReducer(state, action){
  switch(action.type){
    case 'LOGIN':
      return{
        ...state,
        user: action.payload
      }
      case 'LOGOUT':
        return{
          ...state,
          user: null
        }
    default:
      return state;
  }    
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { user: null});

  function login(userData){
    dispatch({
      type: 'LOGIN',
      payload: userData
    })
  }

  function logout(){
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <AuthContext.Provider
      value={{user: state.user, login, logout}}
      { ...props }
    />

  )
}

export { AuthContext, AuthProvider };
// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  signout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();