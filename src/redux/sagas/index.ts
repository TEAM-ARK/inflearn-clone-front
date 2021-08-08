import { all, fork } from '@redux-saga/core/effects';
import lectureSaga from './lecture';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(lectureSaga)]);
}
