import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
<<<<<<< HEAD
    .then(res => {
      dispatch({ type: 'USERS', sports: res.data, headeres: res.headers })
    })
=======
    axios.get('/api/users')
      .then(res => {
        dispatch({ type: 'USERS', users: res.data, headeres: res.headers })
      })
>>>>>>> user to user start
  }
}
