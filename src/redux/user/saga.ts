import {put, call, takeLatest} from 'redux-saga/effects';
import {getUsers} from '../../service/User';
import userActions from './actions';
import actions from './actions';

const setUserList = takeLatest(actions.fetchUsers, function* () {
  try {
    let {data} = yield call(getUsers);
    yield put(userActions.saveUsers(data));
  } catch (e) {
    console.log('User[Error]: ', e);
  }
});

export default [setUserList];
