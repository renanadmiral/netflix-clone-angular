import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { UserProfile } from '../models/UserProfile';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}users/${id}`).pipe(take(1));
  }
}
