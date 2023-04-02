import { Component } from "@angular/core";

@Component({
    selector: "app-player-manager",
    templateUrl: "./player-manager.component.html",
    styleUrls: ["./player-manager.component.css"],
})
export class PlayerManagerComponent {
    public playerName: string = "";

    public createNewPlayer() {
        console.log(this.playerName);
    }
}
