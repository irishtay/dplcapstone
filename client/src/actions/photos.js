import { setFlash } from './flash';

export const handleUpload = (photo) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(photo.name, photo)
    axios.post('/api/photos', data)
      .then( res => {
        dispatch({ type: 'ADD_PHOTO', photo: res.data });
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
        dispatch({ type: 'SET_PHOTOS', photos: res.data });
        dispatch(setFlash('Photos Loaded!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Error Loading Photos!', 'error'));
    });
  }
}
