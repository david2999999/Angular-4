import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import { HttpExerciseComponent } from './http-exercise/http-exercise.component';
import {GithubService} from './http-exercise/github.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HttpExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
