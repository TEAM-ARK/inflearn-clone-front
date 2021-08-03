import produce from 'immer';
import CommonState from './commonState';

const login = new CommonState();
const signUp = new CommonState();
const logout = new CommonState();

interface Ime {
  id: number;
  email: string;
}

export const initialState = {
  login, // login : login
  logout,
  signUp,
  me: null, // type 지정하는 법 확인
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const dummyUser = (data) => ({
  ...data,
  nickname: 'Ark',
  id: 1,
  Lectures: [
    { id: 1, lectureName: 'Node bird' },
    { id: 2, lectureName: 'browser 101' },
  ],
  latestLecture: { id: 1, lectureName: 'Node bird' },
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = (data) => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action) =>
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
      default:
        break;
    }
  });

export default reducer;
