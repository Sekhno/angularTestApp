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
    this.store.dispatch(requestSignInWithGoogleAction())
  }
  logout() {
    // this.auth.signOut();
  }


}
