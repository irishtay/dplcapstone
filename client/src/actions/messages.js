import axios from 'axios';

export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    message
  }
}

<<<<<<< HEAD
export const fetchMessages = () => {
  return(dispatch) => {
    axios.get('/api/messages')
      .then( res => {
        dispatch({ type: 'SET_MESSAGES', messages: res.data });
=======
export const fetchMessages = (post_id) => {
  return(dispatch) => {
    axios.get(`/api/posts/${post_id}/messages`)
      .then( res => {
        dispatch({ type: 'SET_MESSAGES', messages: res.data, post_id: post_id });
>>>>>>> massagebus
      })
      .catch( error => {
        console.log(error);
    });
  }
}
