import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EnterButtonComponent } from './core/components/enter-button/enter-button.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HamburguerMenuComponent } from './pages/home/hamburguer-menu/hamburguer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    WelcomeComponent,
    EnterButtonComponent,
    FooterComponent,
    HamburguerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
