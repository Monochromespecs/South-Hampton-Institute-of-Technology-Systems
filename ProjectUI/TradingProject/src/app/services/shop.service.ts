import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class ShopService {

    private currentUser$: BehaviorSubject<Purchase> = new BehaviorSubject<Purchase>(undefined);
    private balanceupdate$:BehaviorSubject<userBalance> = new BehaviorSubject<userBalance>(undefined);

    setCurrentUser(purchase: Purchase): void{
        this.currentUser$.next(purchase);
    }

    getCurrentUser(): Observable<Purchase> {
        return this.currentUser$.asObservable();
    }

    updateBalance(update:userBalance): void{
        return this.balanceupdate$.next(update);
    }

}

export interface Purchase {
    username: string,
    pokeBallType: string,
    pokeBallPrice: number,
}

export interface userBalance{
    username: string,
    balance: number,
}