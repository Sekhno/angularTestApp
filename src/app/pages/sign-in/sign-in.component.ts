import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    animations: [animationFadeAndScale],
})
export class SignInComponent implements OnInit, OnDestroy, AfterViewInit {
    panelOpenState = false;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);

    emailMatcher = new MyErrorStateMatcher();
    passMatcher = new MyErrorStateMatcher();

    animationState = 'initial';

    constructor(private store: Store, private router: Router) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.animationState = AnimationStates.Loaded;
        });
    }

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

    routeTo(url: string) {
        this.animationState = AnimationStates.Destroyed;
        setTimeout(() => {
            this.router.navigate([url]);
        }, 300);
    }
}
