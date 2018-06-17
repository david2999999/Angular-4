import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { HiddenComponent } from './hidden/hidden.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import {FormsModule} from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { InputFormatDirective } from './custom-directive/input-format.directive';
import { ExerciseZippyComponent } from './exercise-zippy/exercise-zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    HiddenComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    SafeTraversalComponent,
    CustomDirectiveComponent,
    InputFormatDirective,
    ExerciseZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
