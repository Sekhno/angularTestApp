import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {Store} from '@ngrx/store';
import {increment, decrement, reset} from './store/counter-action.actions';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angularTestApp';

  constructor(
    private store: Store<{ count: number }>
  ) {}
}
