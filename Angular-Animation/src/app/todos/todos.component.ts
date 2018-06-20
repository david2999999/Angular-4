import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [
        style({
          backgroundColor: '#ecf0f1', opacity: 0, padding: 0, height: 0
        }),
        animate(300)
      ]),

      transition('* => void', [
        animate(300, style({opacity: 0}))
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
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
