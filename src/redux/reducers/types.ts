// redux login state
export interface IUserState {
  loginLoading: boolean;
  loginError?: string;
  me: IUser | null;
}

// from DB lecture table and etc
export interface ILecture {
  id: string | number;
  coverImage?: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  price: number;
  studentCount: number;
  commentCount: number;
  hashTags?: string[];
  categories?: string[];
  level: 'basic' | 'intermediate' | 'advanced';
  onDiscount?: number;
  isExclusive: boolean;
  createdAt: Date;
}

// DB slider table
export interface IMainSliderData {
  id: number;
  tags: string[];
  title: string;
  text: string;
  pcImg: string;
  mobileImg: string;
  btnTitle: string;
}

// DB user table
export interface IUser {
  id: number;
  email: string;
  nickname?: string;
  lecture?: ILecture[];
  latestLecture: ILecture;
  isInstructor: boolean;
}

// redux action
export interface IAction {
  type: string;
  data?: any;
  error?: string;
}

// CreateLectureData
export interface ILectureInfo {
  id?: number;
  title?: string;
  whatYouCanLearn: LectureInfoChild[];
  expectedStudents: LectureInfoChild[];
  requiredKnowledge: LectureInfoChild[];
  category: {
    id: string;
    name: string;
  }[];
  level: string;
}

// Lecture data on load edit page
export type LectureData = {
  courseInfo: ILectureInfo;
};

export type LectureInfoChild = {
  name: string;
  order: number | string;
};
