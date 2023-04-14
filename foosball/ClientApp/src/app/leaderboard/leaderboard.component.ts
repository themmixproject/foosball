import { Component, OnInit } from "@angular/core";
import { Player } from "src/player";
import { PlayerService } from "../player.service";

@Component({
    selector: "app-leaderboard",
    templateUrl: "./leaderboard.component.html",
    styleUrls: ["./leaderboard.component.css"],
})
export class LeaderboardComponent implements OnInit{
    constructor(private playerService: PlayerService){
        this.playerService.getBestPlayers();
        this._subscription_best_players = this.playerService.bestPlayersChange.subscribe((players) => {
            this.players = players;
        })
    }

    ngOnInit(): void {
        this.players = this.playerService.bestPlayers;
    }

    public players: Player[] = [];
    _subscription_best_players: any;
}
