import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
      this.postService.getAll()
        .subscribe(posts => this.posts = posts );
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    // optimistic update (no waiting for server)
    this.posts.splice(0, 0 , post);

    input.value = '';

    this.postService.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
           // this.form.setError(error.originalError);
        } else {
          throw error;
        }
      });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
      .subscribe(null,
        (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already being deleted');
        } else {
          throw error;
        }
      });
  }

}
