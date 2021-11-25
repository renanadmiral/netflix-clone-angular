import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/core/models/Serie';
import { NetflixService } from 'src/app/core/services/netflix.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serie: any;
  series: Serie[] = [];
  
  constructor(
    private ns: NetflixService
  ) { }

  ngOnInit(): void {
  }

  getSeries() {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8];
    ids.map((id) =>
      this.ns.getSerieById(id).subscribe((serie) => {
        this.series.push(serie);
      })
    );
  }
  getSerieById(id: number) {
    return this.ns.getSerieById(id).subscribe((serie) => this.serie = serie);
  }

}
