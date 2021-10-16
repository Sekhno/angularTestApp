import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { EMPTY, from, Observable, of } from 'rxjs'
import { catchError, first, last, mergeMap, switchMap, tap, map, take } from 'rxjs/operators'
import { AuthActions, signInSuccessAction, signInFailureAction} from './auth.actions'
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { SnakbarService } from '../services/snakbar.service';


@Injectable()
export class AuthEffects {

  navigateToSignIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.NAVIGATE_TO_SIGN_IN),
    tap((action: TypedAction<AuthActions.NAVIGATE_TO_SIGN_IN>) => {
      this.router.navigate(['sign-in'])
    })
  ), { dispatch: false });

  signInWithGoogle$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.REQUEST_SIGH_IN_WITH_GOOGLE),
    mergeMap(() => this.auth.signInWithGoogle().pipe(

      map((res) => this.store.dispatch(signInSuccessAction({
        token: res.credential.accessToken,
        expireAt: 1000
      }))),
      catchError(async (err) => this.store.dispatch(signInFailureAction({message: err})))
    ))
  ), { dispatch: false });

  signInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_SUCCESS),
    tap((action: TypedAction<AuthActions.SIGN_IN_SUCCESS>) => {
      this.snakBar.openSnackBar('Sign in with Google SUCCESS')
      this.router.navigate([''])
    })
  ), { dispatch: false })

  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService,
    private store: Store,
    private snakBar: SnakbarService
  ) {}

}
