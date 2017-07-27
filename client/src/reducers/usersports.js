const usersports = ( state = [], action ) => {
  switch (action.type) {
    case 'USER_SPORTS':
      //{ type: 'SPORTS', SPORTs: [{...},{...}] }
      return action.usersports;
    case 'ADD_USER_SPORT':
      //{ type: 'ADD_SPORT', SPORT: {...} }
      return [...state, action.usersport];
    case 'DELETE_USER_SPORT':
      //{ type: 'DELETE_SPORT', id: 7 }
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default usersports;
