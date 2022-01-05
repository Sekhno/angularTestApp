import {trigger, style, transition, animate, keyframes} from '@angular/animations';

const TRANSITION = '{{duration}}ms ease-in-out';
const DURATION = {params: {duration: 300}};
const STAGGER = 300;

export const animationFadeAndScale = trigger('animationFadeAndScale', [
  transition(
      'initial => loaded',
      [
        // style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('.3s', keyframes([
          style({ opacity: 0, transform: 'scale(0.7)', offset: 0 }),
          style({ opacity: 1, transform: 'scale(1.2)', offset: 0.67 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ])),
      ]
  ),
  transition(
    'loaded => destroyed',
    [
      animate('.3s', style({ opacity: 0, transform: 'scale(0.6)' })),
    ]
  ),
]);

export const heightCollapse = trigger('tuiHeightCollapse', [
  transition(
      ':enter',
      [style({height: 0}), animate(TRANSITION, style({height: '*'}))],
      DURATION,
  ),
  transition(
      ':leave',
      [style({height: '*'}), animate(TRANSITION, style({height: 0}))],
      DURATION,
  ),
]);
