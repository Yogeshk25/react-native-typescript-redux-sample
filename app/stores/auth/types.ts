import { User } from "../../models/user";

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export interface AuthState {
  user: User | null;
  token: string | null;
}

interface LoginAction {
  type: typeof LOGIN
  username: string;
  password: string; 
}

interface SignupAction {
  type: typeof SIGNUP
  username: string;
  password: string; 
}

export type AuthActionTypes = LoginAction | SignupAction;
