const sports = ( state = [], action ) => {
  switch (action.type) {
    case 'SPORTS':
      //{ type: 'SPORTS', SPORTs: [{...},{...}] }
      return action.sports;
    case 'ADD_SPORT':
      //{ type: 'ADD_SPORT', SPORT: {...} }
      return [action.sport, ...state];
    case 'UPDATE_SPORT':
      //{ type: 'UPDATE_SPORT', sport: {...} }
      return state.map( a => {
        if (a.id === action.sport.id)
          return action.sport
        return a
      })
    case 'DELETE_SPORT':
      //{ type: 'DELETE_SPORT', id: 7 }
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default sports;
