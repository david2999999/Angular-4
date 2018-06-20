import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  categories = [
    { name: 'Beginner', selected: false},
    { name: 'Intermediate', selected: false},
    { name: 'Expert', selected: false}
  ];
  constructor() { }

  ngOnInit() {
  }

  select(category) {
    this.categories.filter(c => c.selected !== !c.selected).forEach(c => c['selected'] = false);
    category['selected'] = !category['selected'];
  }
}
