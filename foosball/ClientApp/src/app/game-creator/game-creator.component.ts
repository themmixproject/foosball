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
    constructor(
        private gameService: GameService,
        private playerService: PlayerService
    ) {
        this.teams = [new Team("Blue"), new Team("Red")];
        this._subscription_players = this.playerService.playersChange.subscribe(
            (players) => {
                this.players = players;
                for (let i = 0; i < this.players.length; i++) {
                    if (this.availablePlayers[i] !== undefined) {
                        if (this.availablePlayers[i] === false) {
                            this.availablePlayers[i] = false;
                        }
                    }
                    this.availablePlayers[i] = true;
                }
            }
        );
        this.players = this.playerService.players;
        this.playerSelectorTeam = this.teams[0];
    }

    teams: Array<Team> = [];
    players: Array<any> = [];
    availablePlayers: Array<Boolean> = [];
    _subscription_players: any;

    gameCreatorFormDisplay: Boolean = true;
    public toggleGameCreatorForm() {
        this.gameCreatorFormDisplay = !this.gameCreatorFormDisplay;
    }

    playerSelectorFormDisplay: Boolean = true;
    public togglePlayerSelectorForm() {
        this.playerSelectorFormDisplay = !this.playerSelectorFormDisplay;
    }

    public createGame() {
        this.gameService.createGame(this.teams);
    }

    public addPlayerToTeam(playerIndex: number) {
        this.availablePlayers[playerIndex] = false;
        console.log(this.availablePlayers[playerIndex]);
    }

    public playerSelectorTeam: Team;
    public setPlayerSelectorTeam(teamIndex: number) {
        this.playerSelectorTeam = this.teams[teamIndex];
    }
}
