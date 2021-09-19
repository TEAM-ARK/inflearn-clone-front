import { all, call, delay, fork, put, takeLatest, throttle } from '@redux-saga/core/effects';
import axios from 'axios';
import { dummyLectureEditData, generateDummyLectureList, mainSliderData } from 'src/api/dummyData';
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
  LOAD_EDIT_LECTURE_REQUEST,
  LOAD_EDIT_LECTURE_SUCCESS,
  LOAD_EDIT_LECTURE_FAILURE,
  SAVE_COURSE_INFO_REQUEST,
  SAVE_COURSE_INFO_FAILURE,
  SAVE_COURSE_INFO_SUCCESS,
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

// save course info (중간 저장 : 저장 후 다음이동)
async function postSaveCourseInfo(data) {
  const result = await axios.post('http://3.34.236.174/api/v1/save/course_info', data);
  return result; // Redundant use of `await` on a return value.eslintno-return-await
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
      data: 1,
    });
  } catch (err) {
    yield put({
      type: CREATE_LECTURE_FAILURE,
      error: err,
    });
  }
}

function* loadEditPage() {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_EDIT_LECTURE_SUCCESS,
      data: dummyLectureEditData,
    });
  } catch (err) {
    yield put({
      type: LOAD_EDIT_LECTURE_FAILURE,
      error: err,
    });
  }
}

function* saveCourseInfo(action: IAction) {
  try {
    // const result = yield call(() => postSaveCourseInfo(action.data), action.data);
    yield delay(1000);
    yield put({
      type: SAVE_COURSE_INFO_SUCCESS,
      // data: result?.data
      data: 'course info 저장 성공',
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SAVE_COURSE_INFO_FAILURE,
      error,
    });
  }
}

// watch function*

function* watchLoadMainPage() {
  yield throttle(3000, LOAD_ALL_LECTURES_REQUEST, loadMainPage);
}

function* watchLoadSlider() {
  yield takeLatest(LOAD_SLIDER_REQUEST, loadSlider);
}

function* watchCreateLecture() {
  yield throttle(1000, CREATE_LECTURE_REQUEST, createLecture);
}

function* watchLoadEditPage() {
  yield takeLatest(LOAD_EDIT_LECTURE_REQUEST, loadEditPage);
}

function* watchSaveCourseInfo() {
  yield takeLatest(SAVE_COURSE_INFO_REQUEST, saveCourseInfo);
}

export default function* lectureSaga() {
  yield all([
    fork(watchLoadMainPage),
    fork(watchLoadSlider),
    fork(watchCreateLecture),
    fork(watchLoadEditPage),
    fork(watchSaveCourseInfo),
  ]);
}
