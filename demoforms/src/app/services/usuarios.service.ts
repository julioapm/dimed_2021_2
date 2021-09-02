import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { USERS_API_URL } from '../utils/rest';
import { UsuarioCadastrado, UsuarioCadastro } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private api: RestapiService) { }

  public buscarTodos() {

  }

  public cadastrar(usuario: UsuarioCadastro) {
    return this.api.post<UsuarioCadastrado>(USERS_API_URL, usuario);
  }

}
