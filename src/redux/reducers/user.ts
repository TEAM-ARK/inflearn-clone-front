import produce from 'immer';
import CommonState from './commonState';
import { IAction, IInitialState, IUser } from './types';

const login = new CommonState();
const signUp = new CommonState();
const logout = new CommonState();

export const initialState: IInitialState = {
  login, // login : login (<- new CommonState)
  logout,
  signUp,
  me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const dummyUser = (data: IUser) => ({
  ...data,
  nickname: 'Ark',
  id: 1,
  Lectures: [
    { id: 1, lectureName: 'Node bird' },
    { id: 2, lectureName: 'browser 101' },
  ],
  latestLecture: { id: 1, lectureName: 'Node bird' },
});

export const loginRequestAction = (data: any) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = (data: any) => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action: IAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.login.request();
        break;
      case LOG_IN_SUCCESS:
        draft.login.success();
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.login.failure();
        break;
      // logout, signUp 도 login과 동일하게 구성할 예정
      default:
        break;
    }
  });

export default reducer;
