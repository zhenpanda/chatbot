import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

/*
// location of the server
const ROOT_URL = 'http://localhost:3090';
// make sure server is on when trying to call it

// sign in user creator
export function signinUser({email,password}) {
  // submit email/password to server
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email,password})
      // if request is good
      .then(response => {
        console.log("trying to auth user...");
        // update state is good save the JWT token
        dispatch( { type: AUTH_USER } );
        // save JWT token
        localStorage.setItem('token', response.data.token);
        // redirect to the route '/feature' with push
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if request is bad
        // show error
        dispatch(authError('Bad Login Info'));
      });
  }
}

// sign up user
export function signupUser({ email,password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email,password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        // show error
        dispatch(authError(response.response.data.error))
      });
  }
}

// error on log in
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

// export user
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER}
}

// check API from server
export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        console.log((response));
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
*/
