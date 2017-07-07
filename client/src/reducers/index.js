import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import photos from './photos';
import bio from './bio';

const rootReducer = combineReducers({
  user,
  flash,
  photos,
  bio,
})

export default rootReducer

// REDUX STORE:
// {
//   user: {},
//   flash: {},
//   languages: [],
// }
