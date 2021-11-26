import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Serie } from 'src/app/core/models/Serie';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() serie: Serie = {};
  @Output() serieEraser = new EventEmitter<Serie>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.serie)
  }

  closeModal() {
    this.serieEraser.emit({});
  }

  stopPropagation (event: Event) {
    event.stopPropagation();
  }

  filterImgUrl(url: string = '') {
    return url.replace('()', '');
  }

  timeConvert(min: number) {
    let num = min;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " h " + rminutes + "min";
    }

    joinData(arr: string[] = []) {
      return arr.join(', ');
    }
}
