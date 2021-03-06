import { createAction, props } from '@ngrx/store';

export enum AuthActions {
  NAVIGATE_TO_SIGN_IN = '[Auth] Navigate To Sign In',
  REQUEST_SIGN_IN = '[Auth] Request Sign In',
  SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  SIGN_IN_FAILURE = '[Auth] Sign In Failure',
  REQUEST_SIGN_UP = '[Auth] Request Sign Up',
  SIGN_UP_SUCCESS = '[Auth] Sign Up Success',
  SIGN_UP_FAILURE = '[Auth] Sign Up Failure',
  SIGN_OUT = '[Auth] Sign Out',
  REQUEST_SIGH_IN_WITH_GOOGLE = '[Auth] Request Sign In With Google',
  SIGH_IN_WITH_GOOGLE_SUCCESS = '[Auth] Request Sign In With Google Success',
  SIGH_IN_WITH_GOOGLE_FAILURE = '[Auth] Request Sign In With Google Failure',
}

export const navigateToSignInAction = createAction(
  AuthActions.NAVIGATE_TO_SIGN_IN
);

export const requestSignUpAction = createAction(
  AuthActions.REQUEST_SIGN_UP,
  props<{ username: string, password: string }>()
);

export const signUpSuccessAction = createAction(
  AuthActions.SIGN_UP_SUCCESS,
  props<{ token: string, expireAt: number }>()
);

export const signUpFailureAction = createAction(
  AuthActions.SIGN_UP_FAILURE,
  props<{ message: string }>()
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
);

export const requestSignInWithGoogleAction = createAction(
  AuthActions.REQUEST_SIGH_IN_WITH_GOOGLE
)



