import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { Serie } from '../models/Serie';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {

  private apiUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  constructor(private http: HttpClient) { }

  getSerieById(id: number): Observable<Serie> {
    return this.http.get<Serie>(`${this.apiUrl}series/${id}`).pipe(take(1));
  }

}
