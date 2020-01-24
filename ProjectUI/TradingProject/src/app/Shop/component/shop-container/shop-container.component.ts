import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BallPurchaseService } from '../../service/ball-purchase.service';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.css']
})
export class ShopContainerComponent implements OnInit {

  currentShopper = {
    username: '',
    balance: 0
  };
  userSubscription: Subscription;
  constructor(private shopperService: BallPurchaseService) { }


  //need the name of the service to update this method
  ngOnInit() {
    this.userSubscription = this.shopperService.$currentShopper.subscribe(user => {
      this.currentShopper = user;
    });
  }

}
