import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { PlayerManagerComponent } from "./player-manager/player-manager.component";
import { PlayerCardComponent } from "./player-card/player-card.component";
import { AlertScreenComponent } from "./alert-screen/alert-screen.component";
import { GameManagerComponent } from './game-manager/game-manager.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        PlayerManagerComponent,
        PlayerCardComponent,
        AlertScreenComponent,
        GameManagerComponent,
        GameCreatorComponent,
        GameListComponent,
        GameComponent,
        LeaderboardComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "", component: LeaderboardComponent, pathMatch: "full" },
            { path: "players", component: PlayerManagerComponent },
            { path: "games", component: GameManagerComponent },
            {path: "game/:id", component: GameComponent},
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
