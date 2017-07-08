import axios from 'axios';

export const getSports = () => {
  return (dispatch) => {
    axios.get('/api/sports')
      .then( res => {
        dispatch({ type: 'SPORTS', sports: res.data })
        // cb();
      })
  }
}

export const addSport = (sport) => {
  return (dispatch) => {
    axios.post('/api/sports', { sport })
      .then( res => dispatch({ type: 'ADD_SPORT', sport: res.data }) )
  }
}

export const updateSport = (sport) => {
  return (dispatch) => {
    axios.put(`/api/sports/${sport.id}`)
      .then( res => dispatch({ type: 'UPDATE_SPORT', sport: res.data }) )
  }
}

export const deleteSPORT = (id) => {
  return (dispatch) => {
    axios.delete(`/api/sports/${id}`)
      .then( () => dispatch({ type: 'DELETE_SPORT', id }) )
  }
}
