import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {GameResolver} from "./shared/game.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      game: GameResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
