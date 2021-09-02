import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tratadorDeErros } from '../utils/rest';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(tratadorDeErros));
  }

  public post<T>(url: string, dados: any): Observable<T> {
    return this.http.post<T>(url, dados).pipe(catchError(tratadorDeErros));
  }
}
