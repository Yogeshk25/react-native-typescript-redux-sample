import { User } from '../../models/user';
import {
  UserState,
  UserActionTypes,
  ADD,
  DELETE,
} from './types';

const initialState: UserState = {
  users: [
    new User(1, 'Yogesh', 'Male', '+91 74563 89475'),
    new User(2, 'Ramesh', 'Male', '+91 45720 37589'),
    new User(3, 'Suresh', 'Male', '+91 20958 28694'),
    new User(4, 'Jignesh', 'Male', '+91 87439 34587'),
  ],
}

export const usersReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case ADD:
      return {
        users: [...state.users, action.user],
      }
    case DELETE:
      const idx = state.users.findIndex(u => u.id == action.userId);
      if (idx >= 0) {
        state.users.splice(idx, 1);
        return {
          users: [...state.users],
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}
