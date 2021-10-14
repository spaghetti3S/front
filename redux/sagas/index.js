import { all, fork } from 'redux-saga/effects';

import searchBooksSaga from './searchBooks';

export default function* rootSaga() {
  yield all([
    fork(searchBooksSaga),
    // fork(userSaga),
  ]);
}
