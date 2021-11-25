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
  public form: FormGroup = this.fb.group({
    account: [null, [Validators.required, this.ValidateAccount]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  constructor(private ls: LoginService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  logMeIn() {
    if (this.form.valid) {
      this.ls.postLogin(this.form.value as Login).subscribe((res: any) => {
        const data = JSON.parse(res);
        localStorage.setItem('token', JSON.stringify(data['token']));
        delete data['token'];
        const user: User = data as User;
        localStorage.setItem('users', JSON.stringify(user));
        this.router.navigate([this.ls.intendedRoute]);
      });
    }
  }

  ValidateAccount(
    control: AbstractControl
  ): { [key: string | number]: any } | null {
    if (control.value) {
      if (control.value.includes('@')) return null;
      if (control.value.length != 11 && !isNaN(control.value)) return null;
      return { accountInvalid: true };
    }
    return null;
  }
}