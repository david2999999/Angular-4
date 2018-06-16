import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './data-binding/courses.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AttrBindingComponent,
    BootstrapComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
