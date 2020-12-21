import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  SIGNUP,
} from './types';

import { User } from '../../models/user';

const initialState: AuthState = {
  user: null,
  token: null
}

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  console.log('in authreducer, ' + action.type + ' action')
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: new User(1, action.username, 'Male', '+91 97940 83546'),
        token: 'some-dummy-token'
      }
    case SIGNUP:
      return {
        ...state,
        user: new User(1, action.username, 'Male', '+91 97940 83546'),
        token: 'some-dummy-token'
      }
    default:
      return state;
  }
}
