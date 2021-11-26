import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Serie } from 'src/app/core/models/Serie';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.scss']
})
export class SeriesCardsComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() series: Serie[] = [];
  @Output() serieEmitter = new EventEmitter<Serie>();

  constructor() { }

  ngOnInit(): void {
  }

  emitSerie(serie: Serie) {
    this.serieEmitter.emit(serie);
  }
}
