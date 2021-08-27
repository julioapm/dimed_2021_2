import { Injectable } from '@angular/core';
import { Post } from './posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlBase = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  buscarTodosPosts(): Post[] {
    return this.http.get<Post[]>(this.urlBase)
  }
}
