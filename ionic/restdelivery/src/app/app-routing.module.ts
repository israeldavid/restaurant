import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'olvide',
    loadChildren: () => import('./pages/olvide/olvide.module').then( m => m.OlvidePageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'listadocategorias',
    loadChildren: () => import('./pages/listadocategorias/listadocategorias.module').then( m => m.ListadocategoriasPageModule)
  },
  {
    path: 'listadoitems',
    loadChildren: () => import('./pages/listadoitems/listadoitems.module').then( m => m.ListadoitemsPageModule)
  },
  {
    path: 'cartmodal',
    loadChildren: () => import('./pages/cartmodal/cartmodal.module').then( m => m.CartmodalPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
