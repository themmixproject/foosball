import { Component, OnInit } from "@angular/core";
import { AlertService } from "../alert.service";
import { PlayerService } from "../player.service";
import { Player } from "src/player";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject } from "@angular/core";

@Component({
    selector: "app-player-manager",
    templateUrl: "./player-manager.component.html",
    styleUrls: ["./player-manager.component.css"],
})
export class PlayerManagerComponent implements OnInit {
    constructor(
        private alertService: AlertService,
        private http: HttpClient,
        public playerService: PlayerService,
        @Inject("BASE_URL") baseUrl: string
    ) {
        this.baseUrl = baseUrl;
    }

    baseUrl: string = "";
    playerName: string = "";
    public players: Array<Player> = [];
    ngOnInit(): void {
        this.players = this.playerService.players;
    }

    private _options = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    public createNewPlayer() {
        if (this.playerName === "") {
            this.alertService.toggleAlert("Player name cannot be empty.");
        } else {
            console.log("Create player: " + this.playerName);
            this.playerService.createPlayer(this.playerName);
            this.playerService.getPlayers();
        }
    }
}
