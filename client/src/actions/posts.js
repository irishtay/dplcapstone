import axios from 'axios';

export const getPosts = () => {
  return(dispatch) => {
    axios('/api/posts')
      .then( res => {
        dispatch({ type: 'GET_POSTS', posts: res.data, headers: res.headers })
      })
  }
}

export const handlePostForm = (title, post_body, state, sport_id, history, zip, city, streetAddress) => {
  return(dispatch) => {
    axios.post('/api/posts', { post: { title, post_body, state, sport_id, zip, city, street_address: streetAddress }  })
    .then( res => {
      dispatch({ type: 'ADD_POST', post: res.data, headers: res.headers })
      debugger
    })
    .then( history.push(`/sports/${sport_id}`) )
    .catch(function (error) {
    console.log(error);
  });
  }
}

export const updatePost = (title, post_body, state, sport_id, id, cb, zip, city, streetAddress) => {
  return(dispatch) => {
    axios.put(`/api/posts/${id}`, { post: { title, post_body, state, sport_id, zip, city, street_address: streetAddress } })
    .then( res => {
      dispatch({ type: 'UPDATE_POST', post: res.data, headers: res.headers })
    })
    // .then( cb(id) )
    .catch(function (error) {
    console.log(error);
  });
  }
}

export const deletePost = (id) => {
  return(dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => dispatch({ type: 'REMOVE_POST', id,  headers: res.headers }))
  }
}

export const getSportPosts = (sport_id) => {
  return(dispatch) => {
    console.log(sport_id)
    axios.get(`/api/sport_post/${sport_id}`)
      .then( res => {
        dispatch({ type: "GET_POSTS", posts: res.data, headers: res.headers });
      })
  }
}
