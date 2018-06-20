import {animate, state, style, transition, trigger} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0, padding: 0, height: 0, fontSize: 0 })),

  transition(':enter, :leave', [
    animate(300)
  ]),
])
