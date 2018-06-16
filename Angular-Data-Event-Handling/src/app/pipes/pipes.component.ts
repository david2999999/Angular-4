import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  course = {
    title: 'Welcome to Random Data',
    rating: 4.9745,
    student: 12123,
    price: 190.92,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
