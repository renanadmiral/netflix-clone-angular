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
  //buscar nome do usuário na tela users posteriormente
  userName: string = 'Usuário 1';
  userProfile: UserProfile = {};
  popularSeries: Serie[] = [];
  keepWatchingSeries: Serie[] = [];

  constructor(
    private ns: NetflixService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
    this.getSeries();
  }

  private getSeries() {
    const popularIds = this.userProfile.popular;
    const keepWatchingIds = this.userProfile.keepWatching;

    if (popularIds) {
      popularIds.map((id: number) =>
        this.ns.getSerieById(id).subscribe((serie) => {
          this.popularSeries.push(serie);
        })
      );
    }
    if (keepWatchingIds) {
      keepWatchingIds.map((id: number) =>
        this.ns.getSerieById(id).subscribe((serie) => {
          this.keepWatchingSeries.push(serie);
        })
      );
    }
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
