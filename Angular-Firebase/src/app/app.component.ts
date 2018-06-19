import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  course$;
  author$;
  // courses: any[];
  // subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$ =  db.list('/course').valueChanges();
    this.course$ =  db.object('/course/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();

     // this.subscription = db.list('/course').valueChanges()
     //      .subscribe(courses => {
     //        this.courses = courses;
     //        console.log(this.courses);
     //      });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
