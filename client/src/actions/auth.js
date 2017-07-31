import axios from 'axios';
import { setFlash } from '../actions/flash';

export const registerUser = (email, password, passwordConfirmation, history) => {

  return(dispatch) => {
    axios.post('/api/auth', { email, password, password_confirmation: passwordConfirmation })
      .then( res => {
        let { data: { data: user }, headers } = res;
        dispatch({ type: 'LOGIN', user, headers });
        history.push('/login');
      })
      .catch( res => {
        dispatch(setFlash('Registration failed. Maybe that email has been used. Please enter a new one.', 'error'));
    });
  }
}

export const handleLogout = (history) => {
  // make a request to log the user out
  // dispatch a POJO to log the user out of our redux state
  // push the user with history to the /login route
  return(dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      })
      .catch( res => {
        dispatch(setFlash('Did not log out successfully', 'error'));
      });
    }
}

// const getPath = (bio, usersports) => {
//   if ( bio.body === null ) {
//     return '/bio';
//   } else {
//     if ( usersports.length === 0 ) {
//       return '/sports';
//     } else {
//       return '/user_sports';
//     }
//   }
// }

export const handleLogin = (email, password, history) => {
  return(dispatch) => {
    axios.post('/api/auth/sign_in', { email, password })
      .then( res => {
        let { data: { data: user }, headers } = res;
        dispatch({ type: 'LOGIN', user, headers });
        history.push('/landing');
      })
      .catch( res => {
        dispatch(setFlash('Please register as a new user', 'error'));
      })
  }
}

export const validateToken = (cb = f => f) => {
  return (dispatch) => {
    dispatch({ type: 'VALIDATE_TOKEN' })
    let headers = axios.defaults.headers.common
    axios.get('/api/auth/validate_token', headers)
      .then( res => dispatch({ type: 'LOGIN', user: res.data.data }) )
      .catch(() => cb())
  }
}
