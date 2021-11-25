import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: any;
  users: User[] = [];

  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    const jsonUsers = localStorage.getItem('users');
    if (jsonUsers) { this.users = JSON.parse(jsonUsers) as User[]}
  }

  getUserById(id: number) {
    return this.us.getUserById(id).subscribe((user) => this.user = user);
  }

}
