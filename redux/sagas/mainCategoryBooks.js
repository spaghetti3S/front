import axios from 'axios';
import { delay, put, throttle, call, all, fork } from 'redux-saga/effects';

import {
  SEARCH_MAIN_BOOKS_FAILURE,
  SEARCH_MAIN_BOOKS_REQUEST,
  SEARCH_MAIN_BOOKS_SUCCESS,
} from '../actions/searchBooks';

function loadBooksAPI(kdc) {
  return axios.get(`http://localhost:4000/books/${kdc}`, {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  });
}

function* loadBooks(action) {
  try {
    const result = yield call(loadBooksAPI, action.kdc);
    yield put({
      type: SEARCH_MAIN_BOOKS_SUCCESS,
      data: result.data.response.docs,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_MAIN_BOOKS_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadBooks() {
  yield throttle(5000, SEARCH_MAIN_BOOKS_REQUEST, loadBooks);
}

export default function* mainCategoryBooksSaga() {
  yield all([
    fork(watchLoadBooks),
    //
  ]);
}
