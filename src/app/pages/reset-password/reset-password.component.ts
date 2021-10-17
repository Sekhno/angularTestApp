import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {animationFadeAndScale} from 'src/app/models/animations/animationFadeAndScale';
import {MyErrorStateMatcher} from '../../models/class/errorStateMather';
import {AnimationStates} from '../../models/enum/animationStates';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [animationFadeAndScale]
})
export class ResetPasswordComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailMatcher = new MyErrorStateMatcher();

  animationState = 'initial'

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState = AnimationStates.Loaded;
    })
  }

  resetPassword(){}

  isDisabled(): boolean {
    return !this.emailFormControl.valid
  }

  routeSignIn() {
    this.animationState = AnimationStates.Destroyed;
    setTimeout(() => {
      this.router.navigate(['sign-in'])
    }, 300)
  }

}
