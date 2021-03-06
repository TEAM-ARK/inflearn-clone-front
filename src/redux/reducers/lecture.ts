import produce from 'immer';
import { IAction, ILectureInfo, ILecture, IMainSliderData, LectureData } from './types';

// redux lecture state
export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
  loadLectureLoading: boolean;
  loadLectureError: string;
  mainSliderList: IMainSliderData[];
  loadSliderLoading: boolean;
  loadSliderError?: string;
  createLectureLoading: boolean;
  createLectureDone: boolean;
  createLectureError: string;
  createLectureData: ILectureInfo;
  editLectureLoading: boolean;
  editLectureError: string;
  lectureData: LectureData; // edit page layout에서 불러오는 data
  saveCourseInfoLoading: boolean;
  saveCourseInfoDone: boolean;
  saveCourseInfoError: string;
  searchLecturesLoading: boolean;
  searchLecturesError: string;
  loadEditLectureDescriptionLoading: boolean;
  loadEditLectureDescriptionError: string;
  saveEditLectureDescriptionLoading: boolean;
  saveEditLectureDescriptionError: string;
  saveEditLectureDescriptionDone: boolean;
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
  loadLectureLoading: false,
  loadLectureError: '',
  mainSliderList: [],
  loadSliderLoading: true,
  loadSliderError: undefined,
  createLectureLoading: false,
  createLectureData: {
    id: 0,
    title: '',
    whatYouCanLearn: [],
    expectedStudents: [],
    requiredKnowledge: [],
    category: [],
    level: [],
  },
  createLectureError: '',
  createLectureDone: false,
  editLectureLoading: false,
  editLectureError: '',
  lectureData: {
    courseInfo: {
      id: 0,
      title: '',
      whatYouCanLearn: [],
      expectedStudents: [],
      requiredKnowledge: [],
      category: [],
      level: [],
    },
    description: {
      summary: '',
      descriptionHTMLString: '',
      courseId: '',
    },
  },
  saveCourseInfoLoading: false,
  saveCourseInfoDone: false,
  saveCourseInfoError: '',
  searchLecturesLoading: false,
  searchLecturesError: '',
  loadEditLectureDescriptionLoading: false,
  loadEditLectureDescriptionError: '',
  saveEditLectureDescriptionLoading: false,
  saveEditLectureDescriptionError: '',
  saveEditLectureDescriptionDone: false,
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

// save course info page
export const SAVE_COURSE_INFO_REQUEST = 'SAVE_COURSE_INFO_REQUEST';
export const SAVE_COURSE_INFO_SUCCESS = 'SAVE_COURSE_INFO_SUCCESS';
export const SAVE_COURSE_INFO_FAILURE = 'SAVE_COURSE_INFO_FAILURE';
export const SAVE_COURSE_INFO_DONE = 'SAVE_COURSE_INFO_DONE';

// search lecture page action
export const SEARCH_LECTURES_REQUEST = 'SEARCH_LECTURES_REQUEST';
export const SEARCH_LECTURES_SUCCESS = 'SEARCH_LECTURES_SUCCESS';
export const SEARCH_LECTURES_FAILURE = 'SEARCH_LECTURES_FAILURE';

// get data course description page
export const LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST = 'LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST';
export const LOAD_EDIT_LECTURE_DESCRIPTION_SUCCESS = 'LOAD_EDIT_LECTURE_DESCRIPTION_SUCCESS';
export const LOAD_EDIT_LECTURE_DESCRIPTION_FAILURE = 'LOAD_EDIT_LECTURE_DESCRIPTION_FAILURE';

// save course description page
export const SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST = 'SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST';
export const SAVE_EDIT_LECTURE_DESCRIPTION_SUCCESS = 'SAVE_EDIT_LECTURE_DESCRIPTION_SUCCESS';
export const SAVE_EDIT_LECTURE_DESCRIPTION_FAILURE = 'SAVE_EDIT_LECTURE_DESCRIPTION_FAILURE';
export const SAVE_EDIT_LECTURE_DESCRIPTION_DONE = 'SAVE_EDIT_LECTURE_DESCRIPTION_DONE';

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

      case SEARCH_LECTURES_REQUEST:
        draft.searchLecturesLoading = true;
        break;
      case SEARCH_LECTURES_SUCCESS:
        draft.searchLecturesLoading = false;
        draft.mainLectures = action.data;
        break;
      case SEARCH_LECTURES_FAILURE:
        draft.searchLecturesLoading = false;
        draft.searchLecturesError = action.error;
        break;

      // get data course description page
      case LOAD_EDIT_LECTURE_DESCRIPTION_REQUEST:
        draft.loadEditLectureDescriptionLoading = true;
        break;
      case LOAD_EDIT_LECTURE_DESCRIPTION_SUCCESS:
        draft.loadEditLectureDescriptionLoading = false;
        draft.lectureData.description = action.data;
        break;
      case LOAD_EDIT_LECTURE_DESCRIPTION_FAILURE:
        draft.loadEditLectureDescriptionLoading = false;
        draft.loadEditLectureDescriptionError = action.error;
        break;

      // save course description page
      case SAVE_EDIT_LECTURE_DESCRIPTION_REQUEST:
        draft.saveEditLectureDescriptionLoading = true;
        break;
      case SAVE_EDIT_LECTURE_DESCRIPTION_SUCCESS:
        draft.saveEditLectureDescriptionLoading = false;
        draft.saveEditLectureDescriptionDone = true;
        draft.lectureData.description = action.data;
        break;
      case SAVE_EDIT_LECTURE_DESCRIPTION_FAILURE:
        draft.saveEditLectureDescriptionLoading = false;
        draft.saveEditLectureDescriptionError = action.error;
        break;
      case SAVE_EDIT_LECTURE_DESCRIPTION_DONE:
        draft.saveEditLectureDescriptionDone = false;
        break;

      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
