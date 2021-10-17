import { Action, createReducer, on } from '@ngrx/store';
import { State } from './auth.state'
import {
  navigateToSignInAction,
  requestSignInAction,
  signInSuccessAction,
  signInFailureAction,
  requestSignUpAction,
  signUpSuccessAction,
  signUpFailureAction,
  signOutAction
} from './auth.actions'

export const authFeatureKey = 'auth';

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
  })),
  on(requestSignUpAction, (state, action) => ({
    ...state,
    username: action.username,
    password: action.password
  })),
  on(signUpSuccessAction, (state, action) => ({
    ...state,
    authenticated: true,
    token: action.token,
    expireAt: action.expireAt
  })),
  on(signUpFailureAction, (state, action) => ({
    ...state,
    authenticated: false,
    token: '',
    expireAt: null,
    username: '',
    password: ''
  })),
);

