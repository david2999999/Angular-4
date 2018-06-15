import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses;

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  getTitle() {
    return this.title;
  }

}
