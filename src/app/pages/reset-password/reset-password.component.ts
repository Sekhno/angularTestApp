import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {animationFadeAndScale} from 'src/app/models/animations/animationFadeAndScale';
import {MyErrorStateMatcher} from '../../models/class/errorStateMather';
import {AnimationStates} from '../../models/enum/animationStates';
import {CommonAuthPage} from '../../models/class/CommonAuthPage'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animationFadeAndScale]
})
export class ResetPasswordComponent 
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

  resetPassword(){}

  isDisabled(): boolean {
    return !this.emailFormControl.valid
  }

}
