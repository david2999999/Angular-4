import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  // progress = 0;
  // timer;
  courses;
  isLoading = false;

  constructor() {
    // this.timer = setInterval(() => {
    //   this.progress++;
    //   if (this.progress === 100) {
    //     clearInterval(this.timer);
    //   }
    // }, 20);
    this.isLoading = true;
    this.getCourses().subscribe(x => this.isLoading = false);
  }

  ngOnInit() {
  }

  getCourses() {
    return Observable.timer(2000);
  }

}
