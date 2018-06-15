import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses = ['Course 1', 'Course 2', 'Course 3'];

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

}
