import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { State } from './auth.state';
import { authentificatedSelector } from './auth.selectors';
import { navigateToSignInAction } from './auth.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<State>,
    private router: Router
  ) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(): Observable<boolean>{
    return this.store.select(authentificatedSelector).pipe(
      tap((authentificated: boolean) => {
        if (!authentificated) {
          this.store.dispatch(navigateToSignInAction())
        }
      })
    )
  }

}
