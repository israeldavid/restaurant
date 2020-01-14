import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoitemsPage } from './listadoitems.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoitemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoitemsPageRoutingModule {}
