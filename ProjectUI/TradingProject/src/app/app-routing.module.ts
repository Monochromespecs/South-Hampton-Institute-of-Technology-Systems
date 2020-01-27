import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box/box/box.component';


const routes: Routes = [
  {
    path: '/shop',

    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)
  },
  {
    path: '/box',
    component: BoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
