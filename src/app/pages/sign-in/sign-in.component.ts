import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat/app';
import { requestSignInWithGoogleAction } from '../../auth/auth.actions'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private store: Store,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('Popitka! ' + '[Auth] Request Sign In With Google')
    this.store.dispatch(requestSignInWithGoogleAction())
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

  }
  logout() {
    // this.auth.signOut();
  }


}
