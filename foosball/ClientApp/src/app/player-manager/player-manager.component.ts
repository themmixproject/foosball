import { Component, OnInit } from "@angular/core";
import { AlertService } from "../alert.service";
import { PlayerService } from "../player.service";
import { Player } from "src/player";

@Component({
    selector: "app-player-manager",
    templateUrl: "./player-manager.component.html",
    styleUrls: ["./player-manager.component.css"],
})
export class PlayerManagerComponent implements OnInit {
    constructor(
        private alertService: AlertService,
        private playerService: PlayerService
    ) {}

    playerName: string = "";
    public players: Array<Player> = [];
    ngOnInit(): void {
        this.players = this.playerService.players;
    }

    public createNewPlayer() {
        if (this.playerName === "") {
            this.alertService.toggleAlert("Player name cannot be empty.");
        } else {
            console.log("Create player: " + this.playerName);
            this.playerService.players.push(new Player(this.playerName));
        }
    }
}
