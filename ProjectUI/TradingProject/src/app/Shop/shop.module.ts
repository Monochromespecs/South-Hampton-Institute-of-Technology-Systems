import { ShopContainerComponent } from './component/shop-container/shop-container.component';
import { ShopFormComponent } from './component/shop-form/shop-form.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BallPurchaseService } from './service/ball-purchase.service';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@NgModule({
    declarations: [
        ShopContainerComponent,
        ShopFormComponent
    ],
    imports: [
        HttpClient,
        ShopRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        BallPurchaseService,
        AuthService,
        BallPurchaseService
    ]
})
export class ShopModule { }
