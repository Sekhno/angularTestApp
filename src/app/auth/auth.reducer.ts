import { Action, createReducer, on } from '@ngrx/store';
import {
  navigateToSignInAction,
  requestSignInAction,
  signInSuccessAction,
  signInFailureAction,
  signOutAction
} from './auth.actions'


export const authFeatureKey = 'auth';

export interface State {
  username: string;
  password: string;
  authenticated: boolean;
  token: string;
  expireAt: number | null;
}

export const initialState: State = {
  username: '',
  password: '',
  authenticated: false,
  token: '',
  expireAt: null,
};


export const reducer = createReducer(
  initialState,
  on(requestSignInAction, (state, action) => ({
    ...state,
    username: action.username,
    password: action.password
  })),
  on(signInSuccessAction, (state, action) => ({
    ...state,
    authenticated: true,
    token: action.token,
    expireAt: action.expireAt
  })),
  on(signInFailureAction, (state, action) => ({
    ...state,
    authenticated: false,
    token: '',
    expireAt: null,
    username: '',
    password: ''
  })),
  on(signOutAction, (state, action) => ({
    ...state,
    authenticated: false,
    token: '',
    expireAt: null,
    username: '',
    password: ''
  }))
);

