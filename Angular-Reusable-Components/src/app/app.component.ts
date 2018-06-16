import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './component-api/component-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed', eventArgs.newValue);
  }
}
