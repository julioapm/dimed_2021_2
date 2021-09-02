import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsultaPaginada, Usuario } from '../../models/consultapaginada.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {
  colunas: string[] = ['id', 'email'];
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.buscarTodos().subscribe(
      dados => {
        console.log(dados);
        this.usuarios = dados.data;
      },
      erro => {
        console.log(erro);
        alert('Erro ao buscar usuários');
        this.usuarios = [];
      }
    );
  }

}
