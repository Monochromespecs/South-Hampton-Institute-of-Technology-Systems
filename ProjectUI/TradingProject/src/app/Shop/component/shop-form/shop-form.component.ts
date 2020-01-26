import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output('anythingIWant') formSubmitEmitter: EventEmitter<ShopForm> = new EventEmitter<ShopForm>;

  userId: number;
  type: string;
  quantity: number;

  salePrice: number;
  constructor() { }

  ngOnInit() {
  }

  completePurchase() {
    this.formSubmitEmitter.emit({user_id: this.user_id, type: this.type, quantity: this.quantity });
  }

  updateBalance() {
    this.formSubmitEmitter.emit({user_id: this.user_id});
  }
}
