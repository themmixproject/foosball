import { Component, Input } from "@angular/core";

@Component({
    selector: "app-player-card",
    templateUrl: "./player-card.component.html",
    styleUrls: ["./player-card.component.css"]
})
export class PlayerCardComponent {
    @Input() player: any;

    public deletePlayer() {
        console.log("Delete player: " + this.player.name);
    }
}
