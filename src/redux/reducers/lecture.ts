import produce from 'immer';
import { IAction, ILecture, IMainSliderData } from './types';

// redux lecture state
export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
  loadLectureLoading: boolean;
  loadLectureError?: string;
  mainSliderList: IMainSliderData[];
  loadSliderLoading: boolean;
  loadSliderError?: string;
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
  loadLectureLoading: true,
  loadLectureError: undefined,
  mainSliderList: [],
  loadSliderLoading: true,
  loadSliderError: '',
};

// action types
export const LOAD_ALL_LECTURES_REQUEST = 'LOAD_ALL_LECTURES_REQUEST';
export const LOAD_ALL_LECTURES_SUCCESS = 'LOAD_ALL_LECTURES_SUCCESS';
export const LOAD_ALL_LECTURES_FAILURE = 'LOAD_ALL_LECTURES_FAILURE';

export const LOAD_SLIDER_REQUEST = 'LOAD_SLIDER_REQUEST';
export const LOAD_SLIDER_SUCCESS = 'LOAD_SLIDER_SUCCESS';
export const LOAD_SLIDER_FAILURE = 'LOAD_SLIDER_FAILURE';

// export const CREATE_LECTURE_REQUEST = 'CREATE_LECTURE_REQUEST';
// export const CREATE_LECTURE_SUCCESS = 'CREATE_LECTURE_SUCCESS';
// export const CREATE_LECTURE_FAILURE = 'CREATE_LECTURE_FAILURE';

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

      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
