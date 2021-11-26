import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/core/models/Serie';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.scss']
})
export class SeriesCardsComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() series: Serie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //esse método é para o modal
  // filterImgUrl(url: string = '') {
  //   return url.replace('()', '');
  // }
}
