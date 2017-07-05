import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import languages from './languages';

const rootReducer = combineReducers({
  user,
  flash,
  languages,
})

export default rootReducer

// REDUX STORE:
// {
//   user: {},
//   flash: {},
//   languages: [],
// }
