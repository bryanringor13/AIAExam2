// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import allReducer from './rootReducer';
import rootSaga from './rootSagas';

// React Saga integration
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: allReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

const persistor = persistStore(store);

export {store, persistor};

sagaMiddleware.run(rootSaga);
