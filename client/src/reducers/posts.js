const posts = ( state = [], action ) => {
    switch(action.type) {
        case "GET_POSTS":
            return action.posts;
        case "ADD_POST":
            return [...state, action.post]
        case "UPDATE_POST":
          return state.map( p => {
              if (action.post.id === p.id)
                return action.post
              return p
          })
        case "REMOVE_POST":
          return state.filter( s => s.id !== action.id )
        default:
            return state;
    }
}

export default posts;