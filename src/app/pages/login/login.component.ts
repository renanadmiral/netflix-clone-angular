import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/Login';
import { User } from 'src/app/core/models/User';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showAboutMore = false;

  footerLinks: string[] = [
    'perguntas frequentes',
    'centro de ajuda',
    ' termos de uso',
    'privacidade',
    'preferências de cookies',
    'informações corporativas',
  ];

  constructor(
    private ls: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public formLogin: FormGroup = this.fb.group({
    account: ['', [Validators.required, this.ValidateAccount]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(60)],
    ],
  });

  logMeIn() {
    if (this.formLogin.valid) {
      this.ls.postLogin(this.formLogin.value as Login).subscribe((res: any) => {
        const data = JSON.parse(res);
        localStorage.setItem('token', JSON.stringify(data['token']));
        delete data['token'];
        const user: User = data as User;
        localStorage.setItem('users', JSON.stringify(user));
        this.router.navigate(['/home']);
      });
    }
  }

  ValidateAccount(
    control: AbstractControl
  ): { [key: string | number]: any } | null {
    if (control.value) {
      if (control.value.includes('@')) return null;

      if (control.value.length === 11 && !isNaN(control.value)) {
        let isPhoneNumber = /^(.)\1*$/.test(control.value);

        if (!isPhoneNumber) return null;
      }

      return { accountInvalid: true };
    }
    return null;
  }
}
