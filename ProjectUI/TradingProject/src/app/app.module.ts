import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopFormComponent } from './Shop/component/shop-form/shop-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ShopContainerComponent } from './shop/component/shop-container/shop-container.component';



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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
