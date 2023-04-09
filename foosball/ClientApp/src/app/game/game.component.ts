import { Component } from "@angular/core";
import { Game } from "src/game";
import { GameService } from "../game.service";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent {
    constructor(public gameService: GameService) {}
    
    game: Game = this.gameService.games[0];

    public increaseScore(teamIndex: number, playerIndex: number) {
        this.gameService.game(0).increaseScore(teamIndex, playerIndex);
    }
    public decreaseScore(teamIndex: number, playerIndex: number) {
        this.gameService.game(0).decreaseScore(teamIndex, playerIndex);
    }
}
