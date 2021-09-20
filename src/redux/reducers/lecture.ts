import produce from 'immer';
import { IAction, ILectureInfo, ILecture, IMainSliderData, LectureData } from './types';

// redux lecture state
export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
  loadLectureLoading: boolean;
  loadLectureError?: string;
  mainSliderList: IMainSliderData[];
  loadSliderLoading: boolean;
  loadSliderError?: string;
  createLectureLoading: boolean;
  createLectureDone: boolean;
  createLectureError?: string;
  createLectureData: ILectureInfo;
  editLectureLoading: boolean;
  editLectureError?: string;
  lectureData: LectureData; // edit page layout에서 불러오는 data
  saveCourseInfoLoading: boolean;
  saveCourseInfoDone: boolean;
  saveCourseInfoError?: string;
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
  loadLectureLoading: true,
  loadLectureError: undefined,
  mainSliderList: [],
  loadSliderLoading: true,
  loadSliderError: '',
  createLectureLoading: false,
  createLectureData: {
    id: undefined,
    title: undefined,
    whatYouCanLearn: [],
    expectedStudents: [],
    requiredKnowledge: [],
    category: [],
    level: '',
  },
  createLectureError: undefined,
  createLectureDone: false,
  editLectureLoading: false,
  lectureData: {
    courseInfo: {
      id: undefined,
      title: undefined,
      whatYouCanLearn: [],
      expectedStudents: [],
      requiredKnowledge: [],
      category: [],
      level: '',
    },
  },
  saveCourseInfoLoading: false,
  saveCourseInfoDone: false,
  saveCourseInfoError: undefined,
};

// action types
export const LOAD_ALL_LECTURES_REQUEST = 'LOAD_ALL_LECTURES_REQUEST';
export const LOAD_ALL_LECTURES_SUCCESS = 'LOAD_ALL_LECTURES_SUCCESS';
export const LOAD_ALL_LECTURES_FAILURE = 'LOAD_ALL_LECTURES_FAILURE';

export const LOAD_SLIDER_REQUEST = 'LOAD_SLIDER_REQUEST';
export const LOAD_SLIDER_SUCCESS = 'LOAD_SLIDER_SUCCESS';
export const LOAD_SLIDER_FAILURE = 'LOAD_SLIDER_FAILURE';

export const CREATE_LECTURE_REQUEST = 'CREATE_LECTURE_REQUEST';
export const CREATE_LECTURE_SUCCESS = 'CREATE_LECTURE_SUCCESS';
export const CREATE_LECTURE_FAILURE = 'CREATE_LECTURE_FAILURE';

export const DONE_CREATE_LECTURE = 'DONE_CREATE_LECTURE';

// edit course page action
export const LOAD_EDIT_LECTURE_REQUEST = 'LOAD_EDIT_LECTURE_REQUEST';
export const LOAD_EDIT_LECTURE_SUCCESS = 'LOAD_EDIT_LECTURE_SUCCESS';
export const LOAD_EDIT_LECTURE_FAILURE = 'LOAD_EDIT_LECTURE_FAILURE';

// TextListBox delete button
// export const DELETE_ITEM_WHATYOUCANLEARN = 'DELETE_ITEM_WHATYOUCANLEARN';
// export const DELETE_ITEM_EXPECTEDSTUDENTS = 'DELETE_ITEM_EXPECTEDSTUDENTS';
// export const DELETE_ITEM_REQUIREDKNOWLEDGE = 'DELETE_ITEM_REQUIREDKNOWLEDGE';

// save course info page
export const SAVE_COURSE_INFO_REQUEST = 'SAVE_COURSE_INFO_REQUEST';
export const SAVE_COURSE_INFO_SUCCESS = 'SAVE_COURSE_INFO_SUCCESS';
export const SAVE_COURSE_INFO_FAILURE = 'SAVE_COURSE_INFO_FAILURE';
export const SAVE_COURSE_INFO_DONE = 'SAVE_COURSE_INFO_DONE';

// export const ADD_WHATYOUCANLEARN = 'ADD_WHATYOUCANLEARN';
// export const ADD_EXPECTEDSTUDENTS = 'ADD_EXPECTEDSTUDENTS';
// export const ADD_REQUIREDKNOWLEDGE = 'ADD_REQUIREDKNOWLEDGE';

// reducer
const reducer = (state = initialState, action: IAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // lecture list initial load
      case LOAD_ALL_LECTURES_REQUEST:
        draft.loadLectureLoading = true;
        break;
      case LOAD_ALL_LECTURES_SUCCESS:
        draft.loadLectureLoading = false;
        draft.mainLectures = action.data.concat(draft.mainLectures);
        break;
      case LOAD_ALL_LECTURES_FAILURE:
        draft.loadLectureLoading = false;
        draft.loadLectureError = action.error;
        break;
      // slider
      case LOAD_SLIDER_REQUEST:
        draft.loadSliderLoading = true;
        break;
      case LOAD_SLIDER_SUCCESS:
        draft.loadSliderLoading = false;
        draft.mainSliderList = action.data;
        break;
      case LOAD_SLIDER_FAILURE:
        draft.loadSliderLoading = false;
        draft.loadSliderError = action.error;
        break;
      // create_course -> course/:id/edit/course_info
      case CREATE_LECTURE_REQUEST:
        draft.createLectureLoading = true;
        draft.createLectureDone = false;
        draft.createLectureData.title = action.data;
        break;
      case CREATE_LECTURE_SUCCESS:
        draft.createLectureLoading = false;
        draft.createLectureDone = true;
        draft.createLectureData.id = action.data;
        break;
      case CREATE_LECTURE_FAILURE:
        draft.createLectureLoading = false;
        draft.createLectureDone = true;
        draft.createLectureError = action.error;
        break;
      case DONE_CREATE_LECTURE:
        draft.createLectureDone = false;
        break;

      case LOAD_EDIT_LECTURE_REQUEST:
        draft.editLectureLoading = true;
        break;
      case LOAD_EDIT_LECTURE_SUCCESS:
        draft.editLectureLoading = false;
        draft.lectureData = action.data;
        break;
      case LOAD_EDIT_LECTURE_FAILURE:
        draft.editLectureLoading = false;
        draft.editLectureError = action.error;
        break;
      // case DELETE_ITEM_WHATYOUCANLEARN:
      //   draft.lectureData.courseInfo.whatYouCanLearn = action.data;
      //   break;
      // case DELETE_ITEM_EXPECTEDSTUDENTS:
      //   draft.lectureData.courseInfo.expectedStudents = action.data;
      //   break;
      // case DELETE_ITEM_REQUIREDKNOWLEDGE:
      //   draft.lectureData.courseInfo.requiredKnowledge = action.data;
      //   break;

      case SAVE_COURSE_INFO_REQUEST:
        draft.saveCourseInfoLoading = true;
        break;
      case SAVE_COURSE_INFO_SUCCESS:
        draft.saveCourseInfoLoading = false;
        draft.saveCourseInfoDone = true;
        console.log('SAVE_COURSE_INFO_SUCCESS reducer', action.data);
        break;
      case SAVE_COURSE_INFO_FAILURE:
        draft.saveCourseInfoLoading = false;
        // draft.saveCourseInfoDone = true; // 실패한 경우 페이지를 넘어가지 않고 에러 메세지를 띄우자
        draft.saveCourseInfoError = action.error;
        break;
      case SAVE_COURSE_INFO_DONE:
        draft.saveCourseInfoDone = false;
        break;

      // case ADD_WHATYOUCANLEARN:
      //   draft.lectureData.courseInfo.whatYouCanLearn.push(action.data);
      //   break;
      // case ADD_EXPECTEDSTUDENTS:
      //   draft.lectureData.courseInfo.expectedStudents.push(action.data);
      //   break;
      // case ADD_REQUIREDKNOWLEDGE:
      //   draft.lectureData.courseInfo.requiredKnowledge.push(action.data);
      //   break;

      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
