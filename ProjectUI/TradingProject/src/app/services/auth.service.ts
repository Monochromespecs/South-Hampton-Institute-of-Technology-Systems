import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentShopperStream = new ReplaySubject<AppUser>(1);
  $currentShopper = this.currentShopperStream.asObservable();

  private loginErrorStream = new Subject<string>();
  $loginError = this.loginErrorStream.asObservable();
  currentShopper$: any;


  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<AppUser>('http://localhost:8080/PokemonApi/auth/session-user', {
      withCredentials: true
    }).subscribe(
      data => {
        console.log('logged in');
        console.log(data);
        this.currentShopperStream.next(data);
      },
      err => {
        console.log('not currently logged in');
      }
    );
  }

  login(credentials) {
    this.httpClient.post<AppUser>('http://localhost:8080/PokemonApi/auth/login', credentials, {
      withCredentials: true
    }).subscribe(
      data => {
        console.log('logged in');
        this.router.navigateByUrl('/pokemon');
        this.currentShopperStream.next(data);
      },
      err => {
        console.log(err);
        this.loginErrorStream.next('Failed to Login');
      }
    );
  }

}
