import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacaoComponent } from './navegacao/navegacao.component';

const routes: Routes = [
  { path: 'navegacao', component: NavegacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
