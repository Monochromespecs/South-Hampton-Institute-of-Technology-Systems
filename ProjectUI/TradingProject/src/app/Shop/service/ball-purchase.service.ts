import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { AppUser } from 'src/app/models/user.model';
import { PokeballType } from 'src/app/models/pokeballType.model';

@Injectable({
  providedIn: 'root'
})
export class BallPurchaseService {

  
  public currentShopper$: BehaviorSubject<ShopperInfo> = new BehaviorSubject<ShopperInfo>(undefined);

  setCurrentShopper(shopperInfo: ShopperInfo): void {
    this.currentShopper$.next(shopperInfo);
  }

  getCurrentShopper(): Observable<ShopperInfo> {
    return this.currentShopper$.asObservable();
  }
  completePurchase () {

  }

}
export interface ShopperInfo {
    username: string;
    balance: 0;
}

export interface ShopForm {
  userId: number;
  type: string;
  quantity: number;

  salePrice: number;


}

