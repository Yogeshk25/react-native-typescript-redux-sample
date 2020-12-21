import { User } from '../../models/user';
import { ADD, DELETE, UserActionTypes } from './types';

export function add(user: User): UserActionTypes {
  return {
    type: ADD,
    user: user,
  }
}

export function deleteUser(id: number): UserActionTypes {
  return {
    type: DELETE,
    userId: id,
  }
}
