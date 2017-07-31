const bio = (state = {}, action) => {
  switch(action.type) {
    case "GET_BIO":
      return action.bio
    case "UPDATE_BIO":
      return action.bio
    case "UPDATE_BIO_PHOTO":
      return action.bio
    default:
      return state;
  }
}

export default bio;
