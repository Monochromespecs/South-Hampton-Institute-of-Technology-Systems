import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class ShopService {

    private currentUser$: BehaviorSubject<Purchase> = new BehaviorSubject<Purchase>(undefined);

    setCurrentUser(purchase: Purchase): void{
        this.currentUser$.next(purchase);
    }

    getCurrentUser(): Observable<Purchase> {
        return this.currentUser$.asObservable();
    }

}

export interface Purchase {
    username: string,
    pokeBallType: string,
    pokeBallPrice: number,
}