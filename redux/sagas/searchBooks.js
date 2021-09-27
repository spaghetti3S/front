import axios from 'axios';
import { delay, put, throttle, call, all, fork } from 'redux-saga/effects';

import {
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from '../actions/searchBooks';

function loadBooksAPI() {
  return axios.get(`http://localhost:4000/test`, {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  });
}

function* loadBooks() {
  try {
    const result = yield call(loadBooksAPI);
    console.log(result.data);
    yield delay(1000);
    yield put({
      type: SEARCH_BOOKS_SUCCESS,
      data: result.data.response.docs,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_BOOKS_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadBooks() {
  yield throttle(5000, SEARCH_BOOKS_REQUEST, loadBooks);
}

export default function* searchBooksSaga() {
  yield all([
    fork(watchLoadBooks),
    //
  ]);
}
