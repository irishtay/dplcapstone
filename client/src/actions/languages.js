import axios from 'axios';
import { setFlash } from './flash';

export const addLanguage = (name) => {
  return(dispatch) => {
    axios.post('/api/languages', { language: { name } })
      .then( res => {
        const { data: language, headers } = res;
        dispatch({ type: 'ADD_LANGUAGE', language, headers });
        dispatch(setFlash('Language Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Language Failed To Create!', 'error'));
    });
  }
}

export const editLanguage = (id, language) => {
  return(dispatch) => {
    axios.put(`/api/languages/${id}`, { language } )
      .then( res => {
        const { data: language, headers } = res;
        dispatch({ type: 'EDIT_LANGUAGE', language, headers });
        dispatch(setFlash('Language Edited!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Language Failed To Update!', 'error'));
    });
  }
}

export const deleteLanguage = (id) => {
  return(dispatch) => {
    axios.delete(`/api/languages/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_LANGUAGE', id, headers: res.headers });
        dispatch(setFlash('Language Deleted!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Language Failed To Delete!', 'error'));
    });
  }
}

export const getLanguages = () => {
  return(dispatch) => {
    axios.get('/api/languages')
      .then( res => {
        const { data: languages, headers } = res;
        const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page']);
        dispatch({ type: 'SET_LANGUAGES', languages, pagination: { totalPages }, headers });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Languages.', 'error'));
    });
  }
}
