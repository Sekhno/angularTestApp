import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {animationFadeAndScale} from 'src/app/models/animations/animationFadeAndScale';
import {MyErrorStateMatcher} from '../../models/class/errorStateMather';
import {AnimationStates} from '../../models/enum/animationStates';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [animationFadeAndScale]
})
export class SignUpComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailMatcher = new MyErrorStateMatcher();

  animationState = 'initial'


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationState = AnimationStates.Loaded;
    })
  }

}
