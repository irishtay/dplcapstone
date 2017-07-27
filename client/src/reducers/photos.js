const photos = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_PHOTO':
      return [...state, action.photo];
    case 'SET_PHOTOS':
      return action.photos;
    case 'REMOVE_PHOTO':
      return state.filter(photo => photo.id !== parseInt(action.id))
    default:
      return state;
  }
}

export default photos;
