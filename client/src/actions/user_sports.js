import axios from 'axios';

export const getUserSports = () => {
  return (dispatch) => {
    axios.get('/api/user_sports')
      .then( res => {
        dispatch({ type: 'USER_SPORTS', usersports: res.data, headers: res.headers })
        // cb();
      })
  }
}

export const addUserSport = (id, user_sport) => {
  return (dispatch) => {
    axios.post('/api/user_sports', { user_id: id, user_sport })
      .then( res => {
        dispatch({ type: 'ADD_USER_SPORT', usersport: res.data, headers: res.headers })
      })
  }
}

export const deleteUserSport = (id) => {
  return (dispatch) => {
    axios.delete(`/api/user_sports/${id.sport_id}`)
      .then( res => dispatch({ type: 'DELETE_USER_SPORT', id: id.sport_id, headers: res.headers }) )
  }
}
