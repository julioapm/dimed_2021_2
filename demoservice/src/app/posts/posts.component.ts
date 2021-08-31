import { Component, OnInit } from '@angular/core';
import { Post } from '../posts';
import { PostsService } from '../posts.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = of([]);
  }

  ngOnInit(): void {
    //this.posts$ = this.postsService.buscarTodosPosts();
    this.posts$ = this.postsService.buscarPostPorUserId(1);
  }

}
