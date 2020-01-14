import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadocategoriasPageRoutingModule } from './listadocategorias-routing.module';

import { ListadocategoriasPage } from './listadocategorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadocategoriasPageRoutingModule
  ],
  declarations: [ListadocategoriasPage]
})
export class ListadocategoriasPageModule {}
