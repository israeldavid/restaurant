import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoitemsPageRoutingModule } from './listadoitems-routing.module';

import { ListadoitemsPage } from './listadoitems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoitemsPageRoutingModule
  ],
  declarations: [ListadoitemsPage]
})
export class ListadoitemsPageModule {}
