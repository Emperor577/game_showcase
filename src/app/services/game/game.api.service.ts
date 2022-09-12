import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameModel} from "../../models/game.model";
import { BasicRequest } from "../../shared/basicRequest";

@Injectable({
  providedIn: 'root'
})
export class GameApiService extends BasicRequest<GameModel>{

  constructor(http: HttpClient) {
    super(http, 'games');
  }
}
