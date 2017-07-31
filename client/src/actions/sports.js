import axios from 'axios';

export const getSports = (cb) => {
  return (dispatch) => {
    axios.get('/api/sports')
      .then( res => {
        dispatch({ type: 'SPORTS', sports: res.data, headeres: res.headers })
        if ( cb )
          cb();
      })
  }
}

export const addSport = (sport) => {
  return (dispatch) => {
    axios.post('/api/sports', { sport })
      .then( res => dispatch({ type: 'ADD_SPORT', sport: res.data, headers: res.headers }) )
  }
}

export const updateSport = (sport) => {
  return (dispatch) => {
    axios.put(`/api/sports/${sport.id}`)
      .then( res => dispatch({ type: 'UPDATE_SPORT', sport: res.data, headers: res.headers }) )
  }
}

export const deleteSport = (id) => {
  return (dispatch) => {
    axios.delete(`/api/sports/${id}`)
      .then( res => dispatch({ type: 'DELETE_SPORT', id, headers: res.headers }) )
  }
}
