import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tratadorDeErros } from './util';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(tratadorDeErros));
  }

  public getWithAuth<T>(url: string, user: string, password: string): Observable<T> {
    const headers = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Basic ' + btoa(user + ':' + password))
    };
    return this.http.get<T>(url, headers).pipe(catchError(tratadorDeErros));
  }
}
