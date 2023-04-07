import { Component } from "@angular/core";
import { GameService } from "../game.service";

@Component({
    selector: "app-game-list",
    templateUrl: "./game-list.component.html",
    styleUrls: ["./game-list.component.css"],
})
export class GameListComponent {
    constructor(public gameService: GameService) {}
}
