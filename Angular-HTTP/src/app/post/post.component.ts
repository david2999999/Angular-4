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
    input.value = '';

    this.postService.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        this.posts.splice(0, 0 , post);
      }, (error: AppError) => {
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
    this.postService.delete(post.id)
      .subscribe(() => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already being deleted');
        } else {
          throw error;
        }
      });
  }

}
