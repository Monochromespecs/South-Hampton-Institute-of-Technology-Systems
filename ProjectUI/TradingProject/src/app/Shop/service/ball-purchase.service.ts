import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallPurchaseService {

  private currentShopperStream = new ReplaySubject<AppUser>(1);
  $currentShopper = this.currentShopperStream.asObservable();

  setCurrentShopper(shopperInfo: ShopperInfo): void {
    this.currentShopper$.next(shopperInfo);
  }

  getCurrentShopper(): Observable<ShopperInfo> {
    return this.currentShopper$.asObservable();
  }


}
export interface ShopperInfo{
    username: string;
    balance: 0;
}