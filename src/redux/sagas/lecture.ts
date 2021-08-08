import { all, call, delay, fork, put, throttle } from '@redux-saga/core/effects';
import axios from 'axios';
import { generateDummyLectureList } from 'src/api/dummyData';
import { LOAD_ALL_LECTURES_FAILURE, LOAD_ALL_LECTURES_REQUEST, LOAD_ALL_LECTURES_SUCCESS } from '../reducers/lecture';

// Load all lectures
function loadAllLecturesAPI() {
  return axios.get(`/api/allLectures`);
}

function* loadMainPage(action) {
  try {
    // const result = yield call(loadAllLecturesAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_ALL_LECTURES_SUCCESS,
      data: generateDummyLectureList(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_ALL_LECTURES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMainPage() {
  yield throttle(3000, LOAD_ALL_LECTURES_REQUEST, loadMainPage);
}

export default function* lectureSaga() {
  yield all([fork(watchLoadMainPage)]);
}
