import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { EMPTY, from, Observable, of } from 'rxjs'
import { catchError, first, last, mergeMap, switchMap, tap, map, take } from 'rxjs/operators'
import { AuthActions, requestSignInWithGoogleAction } from './auth.actions'
import { AuthService } from './auth.service';


@Injectable()
export class AuthEffects {

  navigateToSignIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.NAVIGATE_TO_SIGN_IN),
    tap((action: TypedAction<AuthActions.NAVIGATE_TO_SIGN_IN>) => {
      console.log('navigateToSignIn$')
      // this.router.navigate(['sign-in'])

    }),
    catchError(() => EMPTY))
  );

  signInWithGoogleAction$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.REQUEST_SIGH_IN_WITH_GOOGLE),
    // map(() => this.auth.signInWithGoogle().pipe(

    // ))
    // take(1),
    tap((action: TypedAction<AuthActions.REQUEST_SIGH_IN_WITH_GOOGLE>) => {
      console.log('signInWithGoogleAction$')
    }),
    // catchError(() => EMPTY)
  ), { dispatch: false });



  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService
  ) {
    console.log('Effect!')
  }

}
