import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShopFormComponent } from '../component/shop-form/shop-form.component';
import { Purchase } from 'src/app/services/ShopService';

@Injectable({
  providedIn: 'root'
})
export class BallPurchaseService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  purchaseBall(form: ShopFormComponent){
    this.http.patch<Purchase>("http://localhost:8080/", form).subscribe(
      data => {
        
      }
    )
  }
}
