import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-zippy',
  templateUrl: './exercise-zippy.component.html',
  styleUrls: ['./exercise-zippy.component.css']
})
export class ExerciseZippyComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
