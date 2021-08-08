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

// action types
export const LOAD_ALL_LECTURES_REQUEST = 'LOAD_ALL_LECTURES_REQUEST';
export const LOAD_ALL_LECTURES_SUCCESS = 'LOAD_ALL_LECTURES_SUCCESS';
export const LOAD_ALL_LECTURES_FAILURE = 'LOAD_ALL_LECTURES_FAILURE';

// reducer
const reducer = (state = initialState, action: IAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
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
      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
