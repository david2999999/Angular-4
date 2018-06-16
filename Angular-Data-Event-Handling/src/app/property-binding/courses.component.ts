import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of Galaxy';
  imageUrl = 'http://www.luisasempere.com/wp-content/uploads/2017/01/round-cool-galaxy-wallpapers-personalized-simple-white-decoration-ideas-motive-dark-engineering-wonderful.jpg';

  constructor() { }

  ngOnInit() {
  }

}
