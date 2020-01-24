import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  @Output('anythingIWant') formSubmitEmitter: EventEmitter<ShopForm> = new EventEmitter<ShopForm>;

  userId: number;
  type: string;
  quantity: number;


  constructor() { }

  ngOnInit() {
  }

}
