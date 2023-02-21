import {all} from 'redux-saga/effects';
import userSagas from './user/saga';
import articleSagas from './article/saga';

export default function* rootSaga() {
  yield all([...userSagas, ...articleSagas]);
}
