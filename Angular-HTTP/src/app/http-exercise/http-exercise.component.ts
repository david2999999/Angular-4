import { Component, OnInit } from '@angular/core';
import {GithubService} from './github.service';

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {
  followers = [];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
