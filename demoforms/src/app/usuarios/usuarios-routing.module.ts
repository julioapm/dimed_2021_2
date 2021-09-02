import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosDetalheComponent } from './usuarios-detalhe/usuarios-detalhe.component';

const routes: Routes = [
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: UsuariosListaComponent
      },
      {
        path: 'cadastrar',
        component: UsuariosCadastroComponent
      },
      {
        path: 'detalhar/:id',
        component: UsuariosDetalheComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
