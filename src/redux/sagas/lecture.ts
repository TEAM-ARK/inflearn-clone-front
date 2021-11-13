import { all, call, delay, fork, put, takeLatest, throttle } from '@redux-saga/core/effects';
import axios, { AxiosResponse } from 'axios';
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
  SEARCH_LECTURES_REQUEST,
  SEARCH_LECTURES_SUCCESS,
  SEARCH_LECTURES_FAILURE,
  LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST,
  LOAD_EDIT_LECTURE_DESCRIPTION_SUCCESS,
  LOAD_EDIT_LECTURE_DESCRIPTION_FAILURE,
  SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST,
  SAVE_EDIT_LECTURE_DESCRIPTION_FAILURE,
  SAVE_EDIT_LECTURE_DESCRIPTION_SUCCESS,
} from '../reducers/lecture';
import { DescriptionData, IAction, ISearchQueryData } from '../reducers/types';

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

// search lecture
function searchLectureAPI(data: ISearchQueryData) {
  return axios.get(`http://localhost:4000/api/courses?order=${data.order}`);
}

// 강의 수정페이지의 description 페이지에서 초기 데이터 가져오기
async function getEditLectureDescription() {
  const result = await axios.get('https://www.ark-inflearn.shop/docs/api/course/description');
  return result;
}

// 강의 수정페이지의 저장 후 다음이동 버튼 클릭 시 서버로 값 전송하기
async function postSaveLectureDescription(data: DescriptionData) {
  const result = await axios.post('https://www.ark-inflearn.shop/docs/api/course/description', data);
  console.log('postSaveLectureDescription result', result);
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

function* searchLectures(action: IAction) {
  try {
    // const result = yield call(searchLectureAPI, action.data);

    yield delay(1000);
    yield put({
      type: SEARCH_LECTURES_SUCCESS,
      data: generateDummyLectureList(10),
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: SEARCH_LECTURES_FAILURE,
      error,
    });
  }
}

function* loadEditCourseDescription(action: IAction) {
  try {
    // const result = yield call<() => Promise<AxiosResponse<any>>>(getEditLectureDescription);
    yield delay(300);
    yield put({
      type: LOAD_EDIT_LECTURE_DESCRIPTION_SUCCESS,
      // data: result?.data,
      data: dummyLectureEditData.description,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_EDIT_LECTURE_DESCRIPTION_FAILURE,
      error,
    });
  }
}

function* saveCourseEditDescription(action: IAction) {
  try {
    yield call(postSaveLectureDescription, action.data);
    yield delay(500);
    yield put({
      type: SAVE_EDIT_LECTURE_DESCRIPTION_SUCCESS,
      data: action.data, // 서버에 성공적으로 저장하면 로컬 store에 업데이트 함
    });

    // alert 확인을 위한 임시 에러 처리
    // throw new Error('error');
  } catch (error) {
    console.error(error);
    yield put({
      type: SAVE_EDIT_LECTURE_DESCRIPTION_FAILURE,
      error: 'test error',
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

function* watchSearchLectures() {
  yield takeLatest(SEARCH_LECTURES_REQUEST, searchLectures);
}

function* watchLoadCourseEditDescription() {
  yield takeLatest(LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST, loadEditCourseDescription);
}

function* watchSaveCourseEditDescription() {
  yield takeLatest(SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST, saveCourseEditDescription);
}

export default function* lectureSaga() {
  yield all([
    fork(watchLoadMainPage),
    fork(watchLoadSlider),
    fork(watchCreateLecture),
    fork(watchLoadEditPage),
    fork(watchSaveCourseInfo),
    fork(watchSearchLectures),
    fork(watchLoadCourseEditDescription),
    fork(watchSaveCourseEditDescription),
  ]);
}
