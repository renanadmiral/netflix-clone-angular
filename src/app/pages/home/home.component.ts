import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/core/models/Serie';
import { UserProfile } from 'src/app/core/models/UserProfile';
import { NetflixService } from 'src/app/core/services/netflix.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProfile: any;
  serie: any;
  series: Serie[] = [];
  
  constructor(
    private ns: NetflixService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
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
  
  private getUserProfile() {
    const jsonUsers = localStorage.getItem('userProfile');
    if (jsonUsers) {
      this.userProfile = JSON.parse(jsonUsers) as UserProfile;
    } else {
      this.router.navigate(['/users']);
    }
  }

}
