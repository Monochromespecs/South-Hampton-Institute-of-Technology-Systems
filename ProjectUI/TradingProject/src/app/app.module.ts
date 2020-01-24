import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopFormComponent } from './Shop/component/shop-form/shop-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ShopContainerComponent } from './shop/component/shop-container/shop-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BallPurchaseService } from './shop/service/ball-purchase.service';



@NgModule({
  declarations: [
    AppComponent,
    ShopFormComponent,
    ShopContainerComponent,
    NavBarComponent,
    HomeContainerComponent

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
