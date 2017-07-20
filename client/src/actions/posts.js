import axios from 'axios';

export const getPosts = () => {
  return(dispatch) => {
    axios('/api/posts')
      .then( res => {
        dispatch({ type: 'GET_POSTS', posts: res.data, headers: res.headers })
      })
  }
}

export const handlePostForm = (title, post_body, state, sport_id) => {
  return(dispatch) => {
    axios.post('api/posts', { title, post_body, state, sport_id  })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });
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
