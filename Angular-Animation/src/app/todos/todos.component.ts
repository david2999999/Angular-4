import { Component } from '@angular/core';
import {bounceOutLeftAnimation, fade, fadeInAnimation, slide} from '../animations';
import {animate, animateChild, group, query, style, transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ], {optional: true}),
          query('@todoAnimation', [animateChild()], {optional: true})
        ])

      ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1s'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: '#1abc9c'}),
        animate(500),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }
}
