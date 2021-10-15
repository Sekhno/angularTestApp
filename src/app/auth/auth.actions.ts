import { createAction, props } from '@ngrx/store';

export enum AuthActions {
  NAVIGATE_TO_SIGN_IN = '[Auth] Navigate To Sign In',
  REQUEST_SIGN_IN = '[Auth] Request Sign In',
  SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  SIGN_IN_FAILURE = '[Auth] Sign In Failure',
  SIGN_OUT = '[Auth] Sign Out'
}

export const navigateToSignInAction = createAction(
  AuthActions.NAVIGATE_TO_SIGN_IN
);

export const requestSignInAction = createAction(
  AuthActions.REQUEST_SIGN_IN,
  props<{ username: string, password: string }>()
);

export const signInSuccessAction = createAction(
  AuthActions.SIGN_IN_SUCCESS,
  props<{ token: string, expireAt: number }>()
);

export const signInFailureAction = createAction(
  AuthActions.SIGN_IN_FAILURE,
  props<{ message: string }>()
);

export const signOutAction = createAction(
  AuthActions.SIGN_OUT
)
