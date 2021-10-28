import axios from 'axios';
import { delay, put, throttle, call, all, fork } from 'redux-saga/effects';

import {
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from '../actions/searchBooks';

function loadBooksAPI(keyword) {
  return axios.get(
    `http://localhost:4000/book/search/title?keyword=${keyword}`,
    {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
  );
}

function* loadBooks(action) {
  try {
    const result = yield call(loadBooksAPI, action.keyword);
    // yield delay(1000);
    yield put({
      type: SEARCH_BOOKS_SUCCESS,
      data: result.data.item,
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
