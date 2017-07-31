let initialState = {
  loggedInUser: ''
}
const user = (state = initialState, action ) => {
  switch(action.type) {
    // { type: 'LOGIN', user:  { id: 1, name: 'Jake' } }
    case 'LOGIN':
    console.log(Object.assign({}, state, {loggedInUser: action.user}));
      return Object.assign({}, state, {loggedInUser: action.user}, action.user);

    // { type: 'LOGOUT' }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}

export default user;
