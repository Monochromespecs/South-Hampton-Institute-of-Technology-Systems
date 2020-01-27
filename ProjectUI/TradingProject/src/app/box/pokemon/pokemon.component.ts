import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  oops: Pokemon[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
