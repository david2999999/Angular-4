import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AttrBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
