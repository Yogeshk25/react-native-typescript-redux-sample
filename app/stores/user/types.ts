import { User } from "../../models/user";

export const ADD = 'ADD';
export const DELETE = 'DELETE';

export interface UserState {
  users: User[];
}

interface AddUserAction {
  type: typeof ADD;
  user: User;
}

interface DeleteUserAction {
  type: typeof DELETE;
  userId: number;
}

export type UserActionTypes = AddUserAction | DeleteUserAction;
