import {trigger, style, transition, animate, keyframes} from '@angular/animations';

export const animationFadeAndScale = trigger('animationFadeAndScale', [
  transition('initial => loaded', [
    // style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('.3s', keyframes([
      style({ opacity: 0, transform: 'scale(0.7)', offset: 0 }),
      style({ opacity: 1, transform: 'scale(1.2)', offset: 0.67 }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 })
    ])),
  ]),
  transition('loaded => *', [
    animate('.3s', style({ opacity: 0, transform: 'scale(0.6)' })),
  ]),
])
