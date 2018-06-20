import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2018, 8, 1);

  constructor() { }

  ngOnInit() {
  }

}
