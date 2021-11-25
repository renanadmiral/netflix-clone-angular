import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from './core/models/Serie';
import { User } from './core/models/User';
import { LoginService } from './core/services/login.service';
import { NetflixService } from './core/services/netflix.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Netflix';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }

}
