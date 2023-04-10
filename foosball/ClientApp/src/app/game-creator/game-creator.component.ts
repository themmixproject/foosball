import { Component } from "@angular/core";
import { Team } from "src/team";
import { GameService } from "../game.service";

@Component({
    selector: "app-game-creator",
    templateUrl: "./game-creator.component.html",
    styleUrls: ["./game-creator.component.css"],
})
export class GameCreatorComponent {
    constructor(private gameService: GameService) {
        this.teams = [new Team("Blue"), new Team("Red")];
    }

    teams: Array<Team> = [];

    gameCreatorFormDisplay: Boolean = true;
    public toggleGameCreatorForm() {
        this.gameCreatorFormDisplay = !this.gameCreatorFormDisplay;
    }

    public createGame(){
        this.gameService.createGame(this.teams);
    }
}
