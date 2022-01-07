import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {DropdownAnimation} from '../enums/dropdown-animation'

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

export const heightCollapse = trigger('heightCollapse', [
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

export const heightCollapseList = trigger('heightCollapseList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({height: 0}),
                  stagger(STAGGER, [animate(TRANSITION, style({height: '*'}))]),
              ],
              {
                  optional: true,
              },
          ),
          query(
              ':leave',
              [
                  style({height: '*'}),
                  stagger(STAGGER, [animate(TRANSITION, style({height: 0}))]),
              ],
              {
                  optional: true,
              },
          ),
      ],
      DURATION,
  ),
]);

export const widthCollapse = trigger('widthCollapse', [
  transition(
      ':enter',
      [style({width: 0}), animate(TRANSITION, style({width: '*'}))],
      DURATION,
  ),
  transition(
      ':leave',
      [style({width: '*'}), animate(TRANSITION, style({width: 0}))],
      DURATION,
  ),
]);

export const widthCollapseList = trigger('widthCollapseList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({width: 0}),
                  stagger(STAGGER, [animate(TRANSITION, style({width: '*'}))]),
              ],
              {
                  optional: true,
              },
          ),
          query(
              ':leave',
              [
                  style({width: '*'}),
                  stagger(STAGGER, [animate(TRANSITION, style({width: 0}))]),
              ],
              {
                  optional: true,
              },
          ),
      ],
      DURATION,
  ),
]);

export const fadeIn = trigger('fadeIn', [
  transition(
      ':enter',
      [style({opacity: 0}), animate(TRANSITION, style({opacity: 1}))],
      DURATION,
  ),
  transition(
      ':leave',
      [style({opacity: 1}), animate(TRANSITION, style({opacity: 0}))],
      DURATION,
  ),
]);

export const fadeInList = trigger('fadeInList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({opacity: 0}),
                  stagger(STAGGER, [animate(TRANSITION, style({opacity: 1}))]),
              ],
              {
                  optional: true,
              },
          ),
          query(
              ':leave',
              [
                  style({opacity: 1}),
                  stagger(STAGGER, [animate(TRANSITION, style({opacity: 0}))]),
              ],
              {
                  optional: true,
              },
          ),
      ],
      DURATION,
  ),
]);

export const fadeInTop = trigger('fadeInTop', [
  transition(
      ':enter',
      [
          style({transform: 'translateY(-10px)', opacity: 0}),
          animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'translateY(0)', opacity: 1}),
          animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
      ],
      DURATION,
  ),
]);

export const fadeInBottom = trigger('fadeInBottom', [
  transition(
      ':enter',
      [
          style({transform: 'translateY(10px)', opacity: 0}),
          animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'translateY(0)', opacity: 1}),
          animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
      ],
      DURATION,
  ),
]);

export const dropdownAnimation = trigger('dropdownAnimation', [
  transition(
      `* => ${DropdownAnimation.FadeInTop}`,
      [
          style({transform: 'translateY(-10px)', opacity: 0}),
          animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
      ],
      DURATION,
  ),
  transition(
      `* => ${DropdownAnimation.FadeInBottom}`,
      [
          style({transform: 'translateY(10px)', opacity: 0}),
          animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
      ],
      DURATION,
  ),
  transition(
      `${DropdownAnimation.FadeInBottom} => *`,
      [
          style({transform: 'translateY(0)', opacity: 1}),
          animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
      ],
      DURATION,
  ),
  transition(
      `${DropdownAnimation.FadeInTop} => *`,
      [
          style({transform: 'translateY(0)', opacity: 1}),
          animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
      ],
      DURATION,
  ),
]);

export const scaleIn = trigger('scaleIn', [
  transition(
      ':enter',
      [
          style({transform: 'scale(0)'}),
          animate(TRANSITION, style({transform: 'scale(1)'})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'scale(1)'}),
          animate(TRANSITION, style({transform: 'scale(0)'})),
      ],
      DURATION,
  ),
]);

export const scaleInList = trigger('scaleInList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({transform: 'scale(0)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'scale(1)'})),
                  ]),
              ],
              {optional: true},
          ),
          query(
              ':leave',
              [
                  style({transform: 'scale(1)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'scale(0)'})),
                  ]),
              ],
              {optional: true},
          ),
      ],
      DURATION,
  ),
]);

export const slideIn = trigger('slideIn', [
  transition(
      `* => left`,
      [
          style({transform: 'translateX(-100%)'}),
          animate(TRANSITION, style({transform: 'translateX(0)'})),
      ],
      DURATION,
  ),
  transition(
      'left => *',
      [
          style({transform: 'translateX(0)'}),
          animate(TRANSITION, style({transform: 'translateX(-100%)'})),
      ],
      DURATION,
  ),
  transition(
      '* => right',
      [
          style({transform: 'translateX(100%)'}),
          animate(TRANSITION, style({transform: 'translateX(0)'})),
      ],
      DURATION,
  ),
  transition(
      'right => *',
      [
          style({transform: 'translateX(0)'}),
          animate(TRANSITION, style({transform: 'translateX(100%)'})),
      ],
      DURATION,
  ),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(
      ':enter',
      [
          style({transform: 'translateX(-100%)'}),
          animate(TRANSITION, style({transform: 'translateX(0)'})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'translateX(0)'}),
          animate(TRANSITION, style({transform: 'translateX(-100%)'})),
      ],
      DURATION,
  ),
]);

export const slideInLeftList = trigger('slideInLeftList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({transform: 'translateX(-100%)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateX(0)'})),
                  ]),
              ],
              {optional: true},
          ),
          query(
              ':leave',
              [
                  style({transform: 'translateX(0)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateX(-100%)'})),
                  ]),
              ],
              {optional: true},
          ),
      ],
      DURATION,
  ),
]);

export const slideInRight = trigger('slideInRight', [
  transition(
      ':enter',
      [
          style({transform: 'translateX(100%)'}),
          animate(TRANSITION, style({transform: 'translateX(0)'})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'translateX(0)'}),
          animate(TRANSITION, style({transform: 'translateX(100%)'})),
      ],
      DURATION,
  ),
]);

export const slideInRightList = trigger('slideInRightList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({transform: 'translateX(100%)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateX(0)'})),
                  ]),
              ],
              {optional: true},
          ),
          query(
              ':leave',
              [
                  style({transform: 'translateX(0)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateX(100%)'})),
                  ]),
              ],
              {optional: true},
          ),
      ],
      DURATION,
  ),
]);

export const slideInTop = trigger('slideInTop', [
  transition(
      ':enter',
      [
          style({transform: 'translate3d(0,{{start}},0)'}),
          animate(TRANSITION, style({transform: 'translate3d(0,{{end}},0)'})),
      ],
      {params: {end: 0, start: '100%', duration: 300}},
  ),
  transition(
      ':leave',
      [
          style({transform: 'translate3d(0,{{end}},0)'}),
          animate(TRANSITION, style({transform: 'translate3d(0,{{start}},0)'})),
      ],
      {params: {end: 0, start: '100%', duration: 300}},
  ),
]);

export const slideInTopList = trigger('slideInTopList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({transform: 'translateY(100%)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateY(0)'})),
                  ]),
              ],
              {optional: true},
          ),
          query(
              ':leave',
              [
                  style({transform: 'translateY(0)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateY(100%)'})),
                  ]),
              ],
              {optional: true},
          ),
      ],
      DURATION,
  ),
]);

export const slideInBottom = trigger('slideInBottom', [
  transition(
      ':enter',
      [
          style({transform: 'translateY(-100%)'}),
          animate(TRANSITION, style({transform: 'translateY(0)'})),
      ],
      DURATION,
  ),
  transition(
      ':leave',
      [
          style({transform: 'translateY(0)'}),
          animate(TRANSITION, style({transform: 'translateY(-100%)'})),
      ],
      DURATION,
  ),
]);

export const slideInBottomList = trigger('slideInBottomList', [
  transition(
      '* => *',
      [
          query(
              ':enter',
              [
                  style({transform: 'translateY(-100%)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateY(0)'})),
                  ]),
              ],
              {optional: true},
          ),
          query(
              ':leave',
              [
                  style({transform: 'translateY(0)'}),
                  stagger(STAGGER, [
                      animate(TRANSITION, style({transform: 'translateY(-100%)'})),
                  ]),
              ],
              {optional: true},
          ),
      ],
      DURATION,
  ),
]);
