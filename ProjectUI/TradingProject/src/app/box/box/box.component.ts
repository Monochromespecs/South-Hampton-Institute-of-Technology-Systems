import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  pokemon: Pokemon[];

  constructor() { }

  ngOnInit() {
  }

}
