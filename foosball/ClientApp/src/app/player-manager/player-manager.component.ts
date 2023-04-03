import { Component } from "@angular/core";
import { AlertService } from "../alert.service";

@Component({
    selector: "app-player-manager",
    templateUrl: "./player-manager.component.html",
    styleUrls: ["./player-manager.component.css"],
})
export class PlayerManagerComponent {
    constructor(private alertService: AlertService) {}

    playerName: string = "";
    public players: Array<any> = [
        {
            name: "Joey",
            score: 0,
        },
    ];

    public createNewPlayer() {
        if (this.playerName === "") {
            this.alertService.toggleAlert("Player name cannot be empty.");
        } else {
            console.log("Create player: " + this.playerName);
        }
    }
}
