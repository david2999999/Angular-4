import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {PostService} from './services/post.service';
import {GithubService} from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import {AppErrorHandler} from './common/app-error-handler';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubFollowerComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers:
    [
      PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    GithubService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
