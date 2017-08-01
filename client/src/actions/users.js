import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then(res => {
        dispatch({ type: 'USERS', users: res.data, headers: res.headers })
      })
  }
}
