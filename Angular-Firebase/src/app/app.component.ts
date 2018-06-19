import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable, Subscription} from 'rxjs';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseList: AngularFireList<{}>;
  courses$;
  course$;
  author$;
  // courses: any[];
  // subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courseList = db.list('/course');
    this.courses$ =  db.list('/course').valueChanges();
    this.course$ =  db.object('/course/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();

     // this.subscription = db.list('/course').valueChanges()
     //      .subscribe(courses => {
     //        this.courses = courses;
     //        console.log(this.courses);
     //      });
  }

  add(course: HTMLInputElement) {
    this.courseList.push(course.value);
    this.courseList.push({
      name: course.value,
      price: 200,
      isLive: true,
      sections: [
        { title: 'Components'}
      ]
    });

    course.value = '';
  }
}
