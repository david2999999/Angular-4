import {animate, state, style, transition, trigger} from '@angular/animations';

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
    animate('.4s cubic-bezier(.17,.67,1,-0.08)', style({ transform: 'translateX(-100%)'}))
  ])
]);
