import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopFormComponent } from './Shop/component/shop-form/shop-form.component';
import { ShopContainerComponent } from './Shop/component/shop-container/shop-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopFormComponent,
    ShopContainerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
