import produce from 'immer';
import { ILecture } from './types';

export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
};
