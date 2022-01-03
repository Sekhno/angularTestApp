import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animationFadeAndScale } from 'src/app/models/animations/animationFadeAndScale';
import { MyErrorStateMatcher } from '../../models/class/errorStateMather';
import { AnimationStates } from '../../models/enum/animationStates';
import { CommonAuthPage } from '../../models/class/CommonAuthPage'

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [animationFadeAndScale],
})
export class SignUpComponent
    extends CommonAuthPage
    implements OnInit 
{
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    emailMatcher = new MyErrorStateMatcher();

    constructor(
        protected router: Router,
        protected changeDetectorRef: ChangeDetectorRef
    ) {
        super(router, changeDetectorRef)
    }

    ngOnInit(): void {}
}
