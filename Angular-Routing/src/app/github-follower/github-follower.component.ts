import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/observable/combineLatest';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {
  followers = [];

  constructor(private service: GithubService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combine => {
        const id = combine[0].get('id');
        const page =  combine[1].get('page');

        // this.service.getAll({id: id, page: page});
        this.service.getAll()
          .subscribe(followers => this.followers = followers);
      });


  }

}
