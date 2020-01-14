import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadocategoriasPage } from './listadocategorias.page';

const routes: Routes = [
  {
    path: '',
    component: ListadocategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadocategoriasPageRoutingModule {}
