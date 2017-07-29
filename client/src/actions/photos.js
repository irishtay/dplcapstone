import { setFlash } from './flash';
import axios from 'axios'

export const handleUpload = (photo) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(photo.name, photo)
    axios.post('/api/photos', data)
      .then( res => {
        dispatch({ type: 'UPDATE_BIO_PHOTO', image: res.data, headers: res.headers });
        dispatch(setFlash('Image Uploaded!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Error Uploading Photo', 'error'));
    });
  }
}

export const fetchPhotos = () => {
  return(dispatch) => {
    axios.get('/api/photos')
      .then( res => {
        dispatch({ type: 'SET_PHOTOS', photos: res.data, headers: res.headers });
      })
      .catch( res => {
        dispatch(setFlash('Error Loading Photos!', 'error'));
    });
  }
}

export const deletePhoto = (id) => {
 return(dispatch) => {
   axios.delete(`/api/photos/${id}`)
     .then( res => dispatch({ type: 'REMOVE_PHOTO', id,  headers: res.headers }))
 }
}
