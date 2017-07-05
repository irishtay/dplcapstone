import axios from 'axios';

export const setAuthHeaders = (headers) => {
  if(headers['access-token']) {
    // set cookie in the browser
    // that cookie stores the access-token, token-type, client, expiry, uid
    axios.defaults.headers.common['access-token'] = headers['access-token']
    axios.defaults.headers.common['token-type'] = headers['token-type']
    axios.defaults.headers.common['client'] = headers['client']
    axios.defaults.headers.common['expiry'] = headers['expiry']
    axios.defaults.headers.common['uid'] = headers['uid']
  }
}

export const validateToken = () => {
  // grab the cookie and repopulate the axios headers with the cookie info
  axios.get('/api/auth/validate_token', {
    'uid': axios.defaults.headers.common['uid'],
    'client': axios.defaults.headers.common['client'],
    'access-token': axios.defaults.headers.common['access-token']
  }).then( res => {
    return res.data.data;
  }).catch( res => {
    return false;
  });
}
