import produce from 'immer';
import { IAction, ILecture } from './types';

// redux lecture state
export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
  loadLectureLoading: boolean;
  loadLectureError?: string;
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
  loadLectureLoading: true,
  loadLectureError: undefined,
};

export const LOAD_MAINPAGE_REQUEST = 'LOAD_MAINPAGE_REQUEST';
export const LOAD_MAINPAGE_SUCCESS = 'LOAD_MAINPAGE_SUCCESS';
export const LOAD_MAINPAGE_FAILURE = 'LOAD_MAINPAGE_FAILURE';

const reducer = (state = initialState, action: IAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MAINPAGE_REQUEST:
        draft.loadLectureLoading = true;
        break;
      case LOAD_MAINPAGE_SUCCESS:
        draft.loadLectureLoading = false;
        draft.mainLectures = action.data.concat(draft.mainLectures);
        break;
      case LOAD_MAINPAGE_FAILURE:
        draft.loadLectureLoading = false;
        draft.loadLectureError = action.error;
        break;
      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
