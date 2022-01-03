import { AfterViewInit, Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import {
    requestSignInWithGoogleAction,
    requestSignInAction,
} from '../../auth/auth.actions';
import { MyErrorStateMatcher } from '../../models/class/errorStateMather';
import { AnimationStates } from '../../models/enum/animationStates';
import { animationFadeAndScale } from '../../models/animations/animationFadeAndScale';
import { CommonAuthPage } from '../../models/class/CommonAuthPage'

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [animationFadeAndScale],
})
export class SignInComponent 
    extends CommonAuthPage
    implements OnInit, OnDestroy 
{
    panelOpenState = false;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);

    emailMatcher = new MyErrorStateMatcher();
    passMatcher = new MyErrorStateMatcher();

    constructor(
        private store: Store, 
        protected router: Router,
        protected changeDetectorRef: ChangeDetectorRef 
    ) {
        super(router, changeDetectorRef)
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    loginWithGoogle() {
        this.store.dispatch(requestSignInWithGoogleAction());
    }

    loginWithFacebook() {}

    loginWithEmail() {
        this.store.dispatch(
            requestSignInAction({
                username: this.emailFormControl.value,
                password: this.passwordFormControl.value,
            })
        );
    }

    isDisabled(): boolean {
        return !this.emailFormControl.valid || !this.passwordFormControl.valid;
    }
}
