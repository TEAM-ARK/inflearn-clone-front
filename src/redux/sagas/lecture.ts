import { all, call, delay, fork, put, takeLatest, throttle } from '@redux-saga/core/effects';
import axios from 'axios';
import { generateDummyLectureList, mainSliderData } from 'src/api/dummyData';
import {
  CREATE_LECTURE_FAILURE,
  CREATE_LECTURE_REQUEST,
  CREATE_LECTURE_SUCCESS,
  LOAD_ALL_LECTURES_FAILURE,
  LOAD_ALL_LECTURES_REQUEST,
  LOAD_ALL_LECTURES_SUCCESS,
  LOAD_SLIDER_FAILURE,
  LOAD_SLIDER_REQUEST,
  LOAD_SLIDER_SUCCESS,
} from '../reducers/lecture';
import { IAction } from '../reducers/types';

// Load all lectures
function loadAllLecturesAPI() {
  return axios.get(`/api/allLectures`);
}

// create lecture
async function postCreateLecture(title: string) {
  console.log('title', title);
  const param = {
    title,
  };
  const result = await axios.post('http://localhost:4000/create_course', param);
  return result;
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

function* createLecture(action: IAction): any {
  // any를 type 제대로 수정해야 됨
  try {
    // const result = yield call(postCreateLecture, action.data);
    yield delay(1000);
    yield put({
      type: CREATE_LECTURE_SUCCESS,
      // data: result?.data?.lectureId,
      data: { id: 1, title: 'A title from server' },
    });
  } catch (err) {
    yield put({
      type: CREATE_LECTURE_FAILURE,
      error: err,
    });
  }
}

function* watchLoadMainPage() {
  yield throttle(3000, LOAD_ALL_LECTURES_REQUEST, loadMainPage);
}

function* watchLoadSlider() {
  yield takeLatest(LOAD_SLIDER_REQUEST, loadSlider);
}

function* watchCreateLecture() {
  yield throttle(1000, CREATE_LECTURE_REQUEST, createLecture);
}

export default function* lectureSaga() {
  yield all([fork(watchLoadMainPage), fork(watchLoadSlider), fork(watchCreateLecture)]);
}
