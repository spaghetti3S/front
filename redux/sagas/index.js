import { all, fork } from 'redux-saga/effects';

import searchBooksSaga from './searchBooks';
import mainCategoryBooksSaga from './mainCategoryBooks';

export default function* rootSaga() {
  yield all([fork(searchBooksSaga), fork(mainCategoryBooksSaga)]);
}
