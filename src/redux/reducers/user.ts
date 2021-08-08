import produce from 'immer';
import { IAction, IUserState } from './types';

export const initialState: IUserState = {
  loginLoading: false,
  loginError: undefined,
  me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

interface ILoginActionData {
  email: string;
  password: string;
}

export const loginRequestAction = (data: ILoginActionData) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action: IAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      // logout, signUp 도 login과 동일하게 구성할 예정
      default:
        break;
    }
  });

export default reducer;
