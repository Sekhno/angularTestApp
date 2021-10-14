import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/counter-action.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTestApp';

  count$: Observable<number>
  score$: Subject<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    this.score$ = this.onScore()
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  onScore() {
    let score = 1000;
    let id: number;
    const subject = new Subject<number>()

    const anim = function() {
      subject.next(score--)
      if (score < 0) {
        subject.complete()
        window.cancelAnimationFrame(id)
      }
      id = window.requestAnimationFrame(anim)
    }
    anim()
    return subject
  }
}
