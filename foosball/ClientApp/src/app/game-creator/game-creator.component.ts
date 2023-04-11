import { Component } from "@angular/core";
import { Team } from "src/team";
import { GameService } from "../game.service";
import { Player } from "src/player";
import { PlayerService } from "../player.service";

@Component({
    selector: "app-game-creator",
    templateUrl: "./game-creator.component.html",
    styleUrls: ["./game-creator.component.css"],
})
export class GameCreatorComponent {
    constructor(private gameService: GameService, private playerService: PlayerService) {
        this.teams = [new Team("Blue"), new Team("Red")];
        this._subscription_players = this.playerService.playersChange.subscribe((players) => {
            this.players = players;
        })
        this.players = this.playerService.players;
    }

    teams: Array<Team> = [];
    players: Array<any> = []
    _subscription_players : any;

    gameCreatorFormDisplay: Boolean = true;
    public toggleGameCreatorForm() {
        this.gameCreatorFormDisplay = !this.gameCreatorFormDisplay;
    }

    playerSelectorFormDisplay: Boolean = true;
    public togglePlayerSelectorForm(){
        this.playerSelectorFormDisplay = !this.playerSelectorFormDisplay;
    }

    public createGame(){
        this.gameService.createGame(this.teams);
    }
}
