const user = (state = {}, action ) => {
  switch(action.type) {
    // { type: 'LOGIN', user:  { id: 1, name: 'Jake' } }
    case 'LOGIN':
      return { ...action.user }
    // { type: 'LOGOUT' }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}

export default user;
