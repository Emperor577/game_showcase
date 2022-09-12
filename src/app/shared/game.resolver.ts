import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {GameApiService} from "../services/game/game.api.service";
import {ResponseDataModel} from "../models/response-data.model";
import {GameModel} from "../models/game.model";

@Injectable({
  providedIn: 'root'
})
export class GameResolver implements Resolve<ResponseDataModel<GameModel>> {
  constructor(private gameApiService: GameApiService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseDataModel<GameModel>> {
    return this.gameApiService.getAll();
  }
}
