import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  footerLinks: string[] = [
    'perguntas frequentes', 'centro de ajuda', ' termos de uso', 'privacidade',
    'preferências de cookies', 'informações corporativas'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    localStorage.setItem('token', '1efefwgoidfhqoi')
    this.router.navigate(['/home']);
  }

}
