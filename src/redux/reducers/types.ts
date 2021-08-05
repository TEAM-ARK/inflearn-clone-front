import CommonState from './commonState';

export interface IInitialState {
  login: CommonState;
  signUp: CommonState;
  logout: CommonState;
  me: IUser | null;
}

export interface ILecture {
  id: number;
  lectureName: string;
}

export interface IUser {
  id: number;
  email: string;
  nickname?: string;
  Lecture?: ILecture[];
}

export interface IAction {
  type: string;
  data: any;
}
