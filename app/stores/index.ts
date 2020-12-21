import { combineReducers, createStore } from 'redux';
import { authReducer } from './auth/reducers';
import { AuthActionTypes } from './auth/types';
import { usersReducer } from './user/reducers';
import { UserActionTypes } from './user/types';

const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type RootType = AuthActionTypes | UserActionTypes;
export const RootStore = createStore(rootReducer)