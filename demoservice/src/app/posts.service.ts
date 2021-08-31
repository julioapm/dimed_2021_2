import { Injectable } from '@angular/core';
import { Post } from './posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tratadorDeErro } from './tratadores';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlBase = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  buscarTodosPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlBase).pipe(
      catchError(tratadorDeErro<Post[]>([]))
    );
  }

  buscarPostPorUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.urlBase}/?userId=${id}`).pipe(
      catchError(tratadorDeErro<Post[]>([]))
    );
  }
}
