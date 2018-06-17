import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { ExerciseReactiveComponent } from './exercise-reactive/exercise-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormArrayComponent,
    ExerciseReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
