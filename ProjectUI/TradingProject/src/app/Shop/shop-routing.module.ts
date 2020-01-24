import { RouterModule, Routes } from '@angular/router';
import { ShopContainerComponent } from './component/shop-container/shop-container.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '/shop',
        component: ShopContainerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ShopRoutingModule {}
