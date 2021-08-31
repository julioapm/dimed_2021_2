import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './posts';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  posts: Post[];
  private inscricaoPosts: Subscription;

  constructor(private postsService: PostsService) {
    this.posts = [];
    this.inscricaoPosts = Subscription.EMPTY;
  }

  ngOnInit() {
    this.inscricaoPosts = this.postsService.buscarTodosPosts().subscribe(
      dados => this.posts = dados,
      erro => console.error(erro)
    );
  }

  ngOnDestroy() {
    this.inscricaoPosts.unsubscribe();
  }

}
