import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserProfile } from 'src/app/core/models/UserProfile';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUserById(id: number) {
    return this.us.getUserById(id).subscribe((user: UserProfile) => {
      localStorage.setItem('userProfile', JSON.stringify(user));
      this.router.navigate(['/home']);
    });
  }

  private getUsers() {
    const jsonUser = localStorage.getItem('userProfile');
    if (jsonUser) {
      this.router.navigate(['/home']);
    }
    const jsonUsers = localStorage.getItem('users');
    if (jsonUsers) {
      this.users = JSON.parse(jsonUsers).users as User[];
    }
  }
}
