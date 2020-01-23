import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopFormComponent } from './Shop/component/shop-form/shop-form.component';
import { ShopContainerComponent } from './Shop/component/shop-container/shop-container.component';
import { BallPurchaseService } from './Shop/service/ball-purchase.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ShopFormComponent,
    ShopContainerComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BallPurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
