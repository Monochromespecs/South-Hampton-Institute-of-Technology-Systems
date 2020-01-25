import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from "../../service/ball-purchase.service";
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


  constructor() { }

  ngOnInit() {
  }

}
