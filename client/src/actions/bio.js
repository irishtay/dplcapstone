import axios from 'axios';
// import setHeaders from './headers';
import { setFlash } from './flash';

export const getBio = (cb) => {
  return (dispatch) => {
    axios.get('/api/bio')
      .then( res => {
        dispatch({ type: 'GET_BIO', bio: res.data })
      })
      .catch( res => console.log(`Bio GET Fail: ${res}`) )
  }
}

export const updateBio = (name, age, zip, gender) => {
  return (dispatch) => {
    axios.put('/api/bio', { bio: { name, age, zip, gender } })
      .then( res => {
        dispatch({ type: 'UPDATE_BIO', bio: res.data })
        dispatch(setFlash('Bio Updated Successfully!', 'success', { headers: res.headers }));
      })
      .catch( res => {
        dispatch(setFlash('Bio Failed To Update!', 'error'), { headers: res.headers });
        console.log(res);
      })
  }
}
