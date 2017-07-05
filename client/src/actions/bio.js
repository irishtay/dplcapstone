import axios from 'axios';
import setHeaders from './headers';

export const getBio = (cb) => {
  return (dispatch) => {
    axios.get('/api/bio')
      .then( res => {
        let { data: bio, headers } = res;
        dispatch(setHeaders(headers))
        cb(bio.body);
      })
      .catch( res => console.log(`Bio GET Fail: ${res}`) )
  }
}

export const updateBio = (bio, cb) => {
  return (dispatch) => {
    axios.put('/api/bio', { bio: { body: bio }})
      .then( res => {
        let { data: bio, headers } = res;
        dispatch(setHeaders(headers))
        cb(bio.body)
      })
      .catch( res => console.log(`Bio PUT Fail: ${res}`) )
  }
}
