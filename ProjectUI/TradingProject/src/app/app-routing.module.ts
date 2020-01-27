import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box/box/box.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)
  },
  {
    path: '/box',
    component: BoxComponent
  },
  {
    path: 'home',
    component: HomeContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
