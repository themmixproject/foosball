import { Component } from "@angular/core";
import { GameService } from "../game.service";
import { Game } from "src/game";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent {
    constructor(public gameService: GameService){}
    game: Game = this.gameService.games[0];
}
