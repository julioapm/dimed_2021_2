import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';


@NgModule({
  declarations: [
    UsuariosCadastroComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
