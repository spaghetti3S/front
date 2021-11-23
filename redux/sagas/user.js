import axios from 'axios';
import { delay, put, throttle, call, all, fork } from 'redux-saga/effects';

import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from '../actions/user';

function loginUserAPI(inputInfo) {
  return axios
    .post(`http://localhost:4000/user/login`, {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      info: val,
    })
    .then((res, err) => {
      if (err || res.data.code === 400) {
        alert('아이디와 비밀번호를 확인해주세요.');
      } else {
        window.localStorage.setItem('userId', res.data.cookie.user.userId);
        Router.push('/');
      }
    });
}

function* loginUser(action) {
  try {
    const result = yield call(loginUserAPI, [action.id, action.password]);
    // yield delay(1000);
    yield put({
      type: LOGIN_USER_SUCCESS,
      data: result.data.item,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_USER_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchloginUser() {
  yield throttle(5000, LOGIN_USER_REQUEST, loginUser);
}

export default function* loginUserSaga() {
  yield all([
    fork(watchloginUser),
    //
  ]);
}
