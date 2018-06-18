import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {
  followers = [];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
