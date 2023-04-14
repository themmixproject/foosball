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
        let idParam = this.route.snapshot.paramMap.get("id");
        if(idParam==null){
            this.gameId = 1;
        }
        else {
            this.gameId = parseInt(idParam);
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

    public increaseScore(teamId: number, memberId: number) {
        this.gameService.increaseScore(teamId, memberId);
    }
    public decreaseScore(teamId: number, memberId: number) {
        this.gameService.decreaseScore(teamId, memberId);
    }
}
