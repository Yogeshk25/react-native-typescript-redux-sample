import { LOGIN, SIGNUP, AuthActionTypes } from './types';

export function login(username: string, password: string): AuthActionTypes {
  return {
    type: LOGIN,
    username: username,
    password: password
  }
}

export function signup(username: string, password: string): AuthActionTypes {
  return {
    type: SIGNUP,
    username: username,
    password: password
  }
}
