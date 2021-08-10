import { all, call, delay, fork, put, takeLatest, throttle } from '@redux-saga/core/effects';
import axios from 'axios';
import { generateDummyLectureList, mainSliderData } from 'src/api/dummyData';
import {
  LOAD_ALL_LECTURES_FAILURE,
  LOAD_ALL_LECTURES_REQUEST,
  LOAD_ALL_LECTURES_SUCCESS,
  LOAD_SLIDER_FAILURE,
  LOAD_SLIDER_REQUEST,
  LOAD_SLIDER_SUCCESS,
} from '../reducers/lecture';

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

function* loadSlider(action) {
  try {
    // call 로 API 사용해야 함
    // const result = yield call('api/loadSlider')
    yield delay(1000);
    yield put({
      type: LOAD_SLIDER_SUCCESS,
      data: mainSliderData,
    });
  } catch (err) {
    yield put({
      type: LOAD_SLIDER_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMainPage() {
  yield throttle(3000, LOAD_ALL_LECTURES_REQUEST, loadMainPage);
}

function* watchLoadSlider() {
  yield takeLatest(LOAD_SLIDER_REQUEST, loadSlider);
}

export default function* lectureSaga() {
  yield all([fork(watchLoadMainPage), fork(watchLoadSlider)]);
}
