import { Component } from "@angular/core";
import { Team } from "src/team";
import { GameService } from "../game.service";
import { Player } from "src/player";
import { PlayerService } from "../player.service";
import { TeamMember } from "src/team-member";

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
        this.toggleGameCreatorForm();
    }

    public addPlayerToTeam(playerIndex: number) {
        this.availablePlayers[playerIndex] = false;
        this.playerSelectorTeam.members.push(
            new TeamMember(this.players[playerIndex])
        );
    }

    public playerSelectorTeam: Team;
    public setPlayerSelectorTeam(teamIndex: number) {
        this.playerSelectorTeam = this.teams[teamIndex];
    }

    public removePlayerFromTeam(playerId: number, teamIndex: number) {
        let playerIndex = this.playerService.getPlayerIndexById(playerId);
        let memberIndex = this.getPlayerIndexFromTeam(playerId, teamIndex);
        if (playerIndex > -1) {
            this.availablePlayers[playerIndex] = true;
            this.teams[teamIndex].members.splice(memberIndex, 1);
        }
    }

    public getPlayerIndexFromTeam(playerId: number, teamIndex: number) {
        for (let i = 0; i < this.teams[teamIndex].members.length; i++) {
            let teamMember = this.teams[teamIndex].members[i];
            if (teamMember.player.playerId == playerId) {
                return i;
            }
        }

        return -1;
    }
}
