import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ComponentApiComponent } from './component-api/component-api.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentApiComponent,
    NgContentComponent,
    NgContainerComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
