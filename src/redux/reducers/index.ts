import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import lecture from './lecture';
import user from './user';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('action of HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  lecture,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
