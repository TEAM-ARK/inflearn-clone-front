import CommonState from './commonState';

export interface IUserState {
  login: CommonState;
  signUp: CommonState;
  logout: CommonState;
  me: IUser | null;
}

export interface ILecture {
  id: number;
  coverImage: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  price: number;
  studentCount: number;
  hashTags?: string[];
  categories?: string[];
  level: string;
  onDiscount?: number;
  isExclusive: boolean;
  createdAt: Date;
}

export interface IMainSliderData {
  id: number;
  tags: string[];
  title: string;
  text: string;
  pcImg: string;
  mobileImg: string;
  btnTitle: string;
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
