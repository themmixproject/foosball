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
import { PlayerSelectorComponent } from './player-selector/player-selector.component';
import { TeamInputComponent } from './team-input/team-input.component';

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
        PlayerSelectorComponent,
        TeamInputComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            //{ path: "", component: HomeComponent, pathMatch: "full" },
            { path: "player-manager", component: PlayerManagerComponent },
            { path: "", component: GameManagerComponent },
            { path: "counter", component: CounterComponent },
            { path: "fetch-data", component: FetchDataComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
