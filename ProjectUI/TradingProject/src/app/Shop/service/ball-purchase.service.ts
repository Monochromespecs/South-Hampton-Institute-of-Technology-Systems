import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { AppUser } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BallPurchaseService {

  private currentShopperStream = new ReplaySubject< >(1);
  $currentShopper = this.currentShopperStream.asObservable();

  setCurrentShopper(shopperInfo: ShopperInfo): void {
    this.$currentShopper.next(shopperInfo);
  }

  getCurrentShopper(): Observable<ShopperInfo> {
    return this.$currentShopper.asObservable();
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

