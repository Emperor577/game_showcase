import { Component, OnInit } from '@angular/core';
import {GameApiService} from "../../services/game/game.api.service";
import {ActivatedRoute} from "@angular/router";
import {ResponseDataModel} from "../../models/response-data.model";
import {GameModel} from "../../models/game.model";
import {faArrowDownWideShort} from "@fortawesome/free-solid-svg-icons";
import {faArrowDownShortWide} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  sortByAscending = faArrowDownShortWide;
  sortByDescending = faArrowDownWideShort;
  sortByRating: 'asc' | 'desc' = 'asc';
  sortByReleaseDate: 'asc' | 'desc' = 'asc';
  gameResponse: ResponseDataModel<GameModel> | undefined;
  gamePage = 1;

  get sortByParam(): string {
    return `ordering=${this.sortByRating === 'asc' ? 'rating' : '-rating'},${this.sortByReleaseDate === 'asc' ? 'released' : '-released'}`;
  }
  constructor(
    private gameApiService: GameApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (data['game']) {
        this.gameResponse = data['game'];
      }
    });
  }

  sortBy(type: 'rating' | 'release-date'): void {
    if (type === 'rating') {
      this.sortByRating = this.sortByRating === 'asc' ? 'desc' : 'asc';
      this.sortRequest();
    } else {
      this.sortByReleaseDate = this.sortByReleaseDate === 'asc' ? 'desc' : 'asc';
      this.sortRequest();
    }
  }

  private sortRequest(): void {
    this.gameApiService.getAll(`&page=1&page_size=40&${this.sortByParam}`).subscribe(result => {
      if (this.gameResponse) {
        this.gameResponse.results = result.results;
      }
    })
  }

  onScroll(): void {
    this.gameApiService.getAll(`&page=${++this.gamePage}&page_size=40&${this.sortByParam}`).subscribe(result => {
      this.gameResponse?.results.push(...result.results)
    })
  }

}
