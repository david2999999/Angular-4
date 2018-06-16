import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
})
export class ComponentApiComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
