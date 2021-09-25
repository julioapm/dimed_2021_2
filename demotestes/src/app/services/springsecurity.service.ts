import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class SpringsecurityService {
  private url = 'http://localhost:8080';

  constructor(private api: RestapiService) { }

  getAloAuth(user:string, password:string) {
    return this.api.getWithAuth<string>(`${this.url}/alo4`, user, password);
  }
}
