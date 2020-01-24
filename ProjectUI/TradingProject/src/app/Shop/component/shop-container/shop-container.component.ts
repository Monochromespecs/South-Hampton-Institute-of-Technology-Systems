import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.css']
})
export class ShopContainerComponent implements OnInit {

    currentShopper = {
      username: '',
      balance: 0
    }
    userSubscription: Subscription;
  constructor() { }


  //need the name of the service to update this method
  ngOnInit() {
    this.userSubscription = this.authService.$currentShopper.subscribe(user => {
      this.currentShopper = user;
    });
  }

}
