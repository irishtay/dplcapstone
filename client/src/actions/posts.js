import axios from 'axios';

export const getPosts = () => {
  return(dispatch) => {
    axios('/api/posts')
      .then( res => {
        dispatch({ type: 'GET_POSTS', posts: res.data, headers: res.headers })
      })
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
