import { configureStore } from '@reduxjs/toolkit';
import userTokenReducer from './reducers/user/userToken'
import userProfilReducer from './reducers/user/userProfil';

export default configureStore({
  reducer: {
    userToken: userTokenReducer,
    userProfil: userProfilReducer
  },
});