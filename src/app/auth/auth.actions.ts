import { createAction, props } from '@ngrx/store';

export const NavigateToSignInAction = createAction(
  '[Auth] Navigate To Sign In'
);

export const RequestSignInAction = createAction(
  '[Auth] Request Sign In',
  props<{ username: string, password: string }>()
);

export const SignInSuccessAction = createAction(
  '[Auth] Sign In Success',
  props<{ token: string, expireAt: number }>()
);

export const SignInFailureAction = createAction(
  '[Auth] Sign In Failure',
  props<{ message: string }>()
);

export const SignOutAction = createAction(
  '[Auth] Sign Out'
)
