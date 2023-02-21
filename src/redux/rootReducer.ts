import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import userReducer from './user/reducer';
import articleReducer from './article/reducer';

// Persiste config list
import userPersistConfig from './user/persist';
import articlePersistConfig from './article/persist';

// Combined all reducer
const allReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  article: persistReducer(articlePersistConfig, articleReducer),
});

export default allReducer;
