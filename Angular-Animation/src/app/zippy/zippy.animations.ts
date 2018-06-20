import {animate, state, style, transition, trigger} from '@angular/animations';

export const expandCollapse =  trigger( 'expandCollapse', [
  state('collapsed', style({
    height: 0,
    // overflow: 'hidden',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0
  })),

  transition('collapsed => expanded', [
    animate('200ms ease-out', style({
      height: '*',
      paddingTop: '*',
      paddingBottom: '*'
    })),
    animate('.5s', style({ opacity: 1}))
  ]),

  transition('expanded => collapsed', [
    animate('200ms ease-in')
  ])
])
