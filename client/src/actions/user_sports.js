import axios from 'axios';

export const getUserSports = () => {
  return (dispatch) => {
    axios.get('/api/user_sports')
      .then( res => {
        dispatch({ type: 'USER_SPORTS', user_sports: res.data, headers: res.headers })
        // cb();
      })
  }
}

export const addUserSport = (user_sport) => {
  console.log(user_sport);
  return (dispatch) => {
    axios.post('/api/user_sports', { user_sport })
      .then( res => {
        console.log(res.data)
        dispatch({ type: 'ADD_USER_SPORT', user_sport: res.data, headers: res.headers })
      })
  }
}

export const updateUserSport = (user_sport) => {
  return (dispatch) => {
    axios.put(`/api/user_sports/${user_sport.id}`)
      .then( res => dispatch({ type: 'UPDATE_USER_SPORT', user_sport: res.data, headers: res.headers }) )
  }
}

export const deleteUserSport = (id) => {
  return (dispatch) => {
    axios.delete(`/api/user_sports/${id}`)
      .then( res => dispatch({ type: 'DELETE_USER_SPORT', id, headers: res.headers }) )
  }
}
