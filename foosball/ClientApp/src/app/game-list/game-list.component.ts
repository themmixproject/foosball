import { Component } from "@angular/core";
import { GameService } from "../game.service";
import { Game } from "src/game";
import { Observable } from "rxjs";

@Component({
    selector: "app-game-list",
    templateUrl: "./game-list.component.html",
    styleUrls: ["./game-list.component.css"],
})
export class GameListComponent {
    
    constructor(private gameService: GameService) {
        this._subscription_games = this.gameService.execChange.subscribe((games) => {
            this.games = games;
        })
        this.games = gameService.games;
    }
    
    
    games: Array<Game>;
    _subscription_games :any;
}
    
