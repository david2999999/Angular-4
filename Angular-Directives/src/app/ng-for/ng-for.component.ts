import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  courses = [];

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.courses.push({
      id: 4, name: 'Course 4'
    });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'Course 1'},
      { id: 2, name: 'Course 2'},
      { id: 3, name: 'Course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
