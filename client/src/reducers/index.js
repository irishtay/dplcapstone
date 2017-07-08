import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import photos from './photos';
import bio from './bio';
import sports from './sports';

const rootReducer = combineReducers({
  user,
  flash,
  photos,
  bio,
  sports,
})

export default rootReducer

// REDUX STORE:
// {
//   user: {},
//   flash: {},
//   languages: [],
// }
