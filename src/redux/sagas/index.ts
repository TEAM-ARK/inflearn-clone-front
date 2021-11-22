import { all, fork } from '@redux-saga/core/effects';
import axios from 'axios';
import lectureSaga from './lecture';
import userSaga from './user';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(lectureSaga)]);
}
