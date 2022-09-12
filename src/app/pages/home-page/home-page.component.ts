import { Component, OnInit } from '@angular/core';
import {GameApiService} from "../../services/game/game.api.service";
import {ActivatedRoute} from "@angular/router";
import {ResponseDataModel} from "../../models/response-data.model";
import {GameModel} from "../../models/game.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  gameResponse: ResponseDataModel<GameModel> | undefined;
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

}
