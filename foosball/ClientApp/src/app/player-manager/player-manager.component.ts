import { Component } from "@angular/core";

@Component({
    selector: "app-player-manager",
    templateUrl: "./player-manager.component.html",
    styleUrls: ["./player-manager.component.css"],
})
export class PlayerManagerComponent {
    public playerName: string = "";
    public players: Array<any> = [
        {
            name: "Joey",
            score: 0
        }
    ];

    public createNewPlayer() {
        console.log("Create player: " + this.playerName);
    }
}
