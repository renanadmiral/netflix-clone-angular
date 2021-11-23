import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  constructor(
    private router: Router
  ) { }

}
