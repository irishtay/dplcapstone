const languages = (state = { data: [], pagination: {} }, action) => {
  switch(action.type) {
    // { type: 'ADD_LANGUAGE', language: 'JavaScript' }
    case 'ADD_LANGUAGE':
      return { data: [...state, action.language], pagination: action.pagination }
    case 'SET_LANGUAGES':
      return { data: action.languages, pagination: action.pagination  };
    case 'EDIT_LANGUAGE':
      const data = state.map(language => {
        if(language.id === action.language.id)
          return action.language
        else
          return language
      })
      return { data, pagination: action.pagination  }
    case 'DELETE_LANGUAGE':
      const languages = state.filter( language => language.id !== action.id)
      return { data: languages, pagination: action.pagination  }
    default:
      return state;
  }
}

export default languages;
