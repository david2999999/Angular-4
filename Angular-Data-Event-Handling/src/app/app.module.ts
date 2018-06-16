import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './data-binding/courses.component';
import { AttrBindingComponent } from './attr-binding/attr-binding.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TemplateVarComponent } from './template-var/template-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AttrBindingComponent,
    BootstrapComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVarComponent,
    TwoWayBindingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
