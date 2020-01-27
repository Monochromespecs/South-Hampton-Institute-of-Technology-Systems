import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ShopContainerComponent } from './shop/component/shop-container/shop-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BallPurchaseService } from './shop/service/ball-purchase.service';
import { AuthService } from './services/auth.service';
import { PokemonComponent } from './box/pokemon/pokemon.component';
import { BoxComponent } from './box/box/box.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopContainerComponent,
    NavBarComponent,
    HomeContainerComponent,
    PokemonComponent,
    BoxComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BallPurchaseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
