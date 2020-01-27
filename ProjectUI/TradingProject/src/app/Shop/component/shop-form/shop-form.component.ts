import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopForm } from '../../service/ball-purchase.service';
@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output ('anythingIWant') formSubmitEmitter: EventEmitter<ShopForm> = new EventEmitter<ShopForm>();

  userId: number;
  type: string;
  quantity: number;

  salePrice: number;
  constructor() { }
  pokeBall = 0;
  greatBall = 0;
  ultraBall = 0;

  buyPokeBall(): void {
    this.pokeBall++;
  }
  buyGreatBall(): void {
    this.greatBall++;
  }
  buyUltraBall(): void {
    this.ultraBall++;
  }

  ngOnInit() {
  }

  completePurchase() {
    this.formSubmitEmitter.emit({ userId: this.userId, type: this.type, quantity: this.quantity, salePrice: this.salePrice });
  }

  updateBalance() {
    this.formSubmitEmitter.emit({ userId: this.userId, type: this.type, quantity: this.quantity, salePrice: this.salePrice });
  }
}
