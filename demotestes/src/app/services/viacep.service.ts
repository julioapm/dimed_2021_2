import { Injectable } from '@angular/core';
import { Address } from './address';
import { RestapiService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  private url = 'https://viacep.com.br/ws/';

  constructor(private api: RestapiService) { }

  getAddress(cep: string) {
    return this.api.get<Address>(`${this.url}${cep}/json/`);
  }
}
