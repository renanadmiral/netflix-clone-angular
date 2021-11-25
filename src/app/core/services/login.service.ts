import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { Login } from '../models/Login';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  intendedRoute = '';
  private apiUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  constructor(private http: HttpClient) { }

  postLogin(login: Login) {
    const HTTPOptions: Object = {
      responseType: 'text'
   }
    return this.http.post(`${this.apiUrl}/login`, login, HTTPOptions).pipe(take(1));
  }

}
