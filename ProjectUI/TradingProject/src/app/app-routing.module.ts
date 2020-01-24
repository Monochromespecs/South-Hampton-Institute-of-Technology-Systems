import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopContainerComponent } from './Shop/component/shop-container/shop-container.component';


const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
