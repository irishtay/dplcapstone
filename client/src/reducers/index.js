import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import photos from './photos';
import bio from './bio';
import sports from './sports';
import usersports from './usersports';
import posts from './posts';

const rootReducer = combineReducers({
  user,
  flash,
  photos,
  bio,
  sports,
  posts,
  usersports,
})

export default rootReducer

// REDUX STORE:
// {
//   user: {},
//   flash: {},
//   languages: [],
// }
