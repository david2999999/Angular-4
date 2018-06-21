import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {EditCourseComponent} from './edit-course/edit-course.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: {
        courseId: 1
      }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

}
