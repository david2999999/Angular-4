import { Component } from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store';
import {INCREMENT} from './actions';
import {Subscription} from 'rxjs';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @select('counter') count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessages;
  // newMessages;

  counter;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      this.counter = store.counter;
      // this.newMessages = store.messaging.newMessages;
    });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
