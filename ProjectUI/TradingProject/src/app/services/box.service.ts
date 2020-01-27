import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private boxStream = new ReplaySubject<Pokemon>(1);
  box$ = this.boxStream.asObservable();

  constructor(private httpClient: HttpClient) { }

}
