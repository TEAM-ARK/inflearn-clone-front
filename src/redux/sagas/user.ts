import { all, call, delay, fork, put, takeLatest } from '@redux-saga/core/effects';
// import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from 'src/redux/reducers/user';
import { IAction } from '../reducers/types';

// 로그인
// function loginAPI(data) {
//   return axios.post('/api/login', data);
// }

function* login(action: IAction) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
      // data: result.data
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
