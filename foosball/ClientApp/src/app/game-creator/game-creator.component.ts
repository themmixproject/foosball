import { Component } from "@angular/core";
import { Team } from "src/team";

@Component({
    selector: "app-game-creator",
    templateUrl: "./game-creator.component.html",
    styleUrls: ["./game-creator.component.css"],
})
export class GameCreatorComponent {
    constructor() {
        this.teams = [new Team("Blue"), new Team("Red")];
    }

    teams: Array<Team> = [];

    gameCreatorFormDisplay: Boolean = true;
    public toggleGameCreatorForm() {
        this.gameCreatorFormDisplay = !this.gameCreatorFormDisplay;
    }
}
