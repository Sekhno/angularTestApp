import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat/app';
import { Observable, from } from 'rxjs';
import {  } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  getUser() {
    return this.auth.user
  }

  signUpWithEmail(username: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(username, password)
  }

  signInWithEmail(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(username, password)
  }

  signInWithGoogle() {
    return from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
  }

  signInWithFacebook() {}

  forgotPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email)
  }
}
