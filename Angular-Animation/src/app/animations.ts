import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate('.6s ease-out', keyframes([
    style({ offset: .2, opacity: 1, transform: 'translateX(20px)'}),
    style({ offset: 1, opacity: 0, transform: 'translateX(-100%)'}),
  ]))
);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    // default value for the params
    duration: '1s',
    easing: 'ease-out'
  }
});

export let fadeOutAnimation = animation(
  animate(300, style({ opacity: 0}))
);

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation, {
    params: {
      duration: '10s'
    }
  })),

  transition(':leave', useAnimation(fadeOutAnimation)),

]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-100px)'}),
    animate(500)
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
