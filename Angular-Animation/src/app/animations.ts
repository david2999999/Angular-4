import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0, padding: 0, height: 0, fontSize: 0 })),

  transition(':enter, :leave', [
    animate(300)
  ]),
])

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-100px)'}),
    animate(500)
  ]),
  transition(':leave', [
    animate('.6s ease-out', keyframes([
      style({ offset: .2, opacity: 1, transform: 'translateX(20px)'}),
      style({ offset: 1, opacity: 0, transform: 'translateX(-100%)'}),
    ]))
  ])
]);
