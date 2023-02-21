import {put, call, takeLatest} from 'redux-saga/effects';
import {getArticles} from '../../service/Article';
import articleAction from './actions';
import actions from './actions';

const setArticles = takeLatest(actions.fetchArticles, function* () {
  try {
    // Call api of get articles
    let {data} = yield call(getArticles);
    yield put(articleAction.saveArticles(data));
  } catch (e) {
    // Catch error When there is something wrong with fetching data from api
    console.log('Article[Error]: ', e);
  }
});

export default [setArticles];
