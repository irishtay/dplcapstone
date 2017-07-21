import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
    .then(res => {
      dispatch({ type: 'USERS', sports: res.data, headeres: res.headers })
    })
  }
}
