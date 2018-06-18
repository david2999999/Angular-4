import { Injectable } from '@angular/core';
import {DataService} from '../services/data.service';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/mschwarzmueller/followers', http);
  }
}
