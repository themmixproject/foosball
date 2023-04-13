import { Component } from "@angular/core";
import { Game } from "src/game";
import { GameService } from "../game.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent {
    constructor(public gameService: GameService, private route: ActivatedRoute) {
        this.gameId = 0;
        let idParam = this.route.snapshot.queryParamMap.get("id");
        if(idParam!=null){
            this.gameId = 1
        }
        else {
            if(idParam!=null){
                this.gameId = idParam;
            }
        }
        this.game = new Game([]);
        this._subscription_games = this.gameService.execChange.subscribe((games) => {
            this.game = gameService.getGameById(this.gameId);
        })
        this.game = this.gameService.getGameById(this.gameId);
    }
    
    // game: Game = this.gameService.games[0];
    public gameId: number;
    
    game: Game;
    _subscription_games :any;

    public increaseScore(teamIndex: number, playerIndex: number) {
        this.gameService.game(0).increaseScore(teamIndex, playerIndex);
    }
    public decreaseScore(teamIndex: number, playerIndex: number) {
        this.gameService.game(0).decreaseScore(teamIndex, playerIndex);
    }
}
