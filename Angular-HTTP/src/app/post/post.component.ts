import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
      this.postService.getPost()
        .subscribe(response => {
          this.posts = response.json();
        }, error => {
          alert('An unexpected error occured');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    input.value = '';

    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0 , post);
      }, (error: Response) => {
        if (error.status === 400) {
          // this.form.setError(error.json());
        } else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, (error: Response) => {
        alert('An unexpected error occured');
        console.log(error);
      });
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404){
          alert('This post has already being deleted');
        } else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

}
