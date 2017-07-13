import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import photos from './photos';
import bio from './bio';
import sports from './sports';
<<<<<<< HEAD
import user_sports from './usersports';
=======
import posts from './posts';
>>>>>>> 2eef63d04aa9a59894a3e6263c86899f66e27789

const rootReducer = combineReducers({
  user,
  flash,
  photos,
  bio,
  sports,
  posts,
})

export default rootReducer

// REDUX STORE:
// {
//   user: {},
//   flash: {},
//   languages: [],
// }
