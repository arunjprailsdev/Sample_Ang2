import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from'./post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());  
  }
  getPosts() {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
