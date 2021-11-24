import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  footerLinks: string[] = [
    'perguntas frequentes', 'centro de ajuda', 'conta',
    'imprensa', 'relação com investidores', 'carreiras', 'resgatar cartão pré-pago',
    'comprar cartão pré-pago', 'formas de assistir', 'termos de uso', 'privacidade',
    'preferências de cookies', 'informações corporativas', 'entre em contato',
    'teste de velocidade', 'avisos legais', 'só na netflix'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }
}
