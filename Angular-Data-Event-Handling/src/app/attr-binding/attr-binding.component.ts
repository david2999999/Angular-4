import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.css']
})
export class AttrBindingComponent implements OnInit {
  imageUrl = '';
  colSpan = 2;

  constructor() { }

  ngOnInit() {
  }

}
