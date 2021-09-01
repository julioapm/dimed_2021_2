import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginanaoencontradaComponent } from './paginanaoencontrada/paginanaoencontrada.component';
import { BoasvindasComponent } from './boasvindas/boasvindas.component';

const routes: Routes = [
  { path: '', component: BoasvindasComponent },
  { path: '**', component: PaginanaoencontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
