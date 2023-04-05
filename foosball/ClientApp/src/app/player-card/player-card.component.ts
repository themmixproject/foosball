import { Component, Input } from "@angular/core";
import { PlayerService } from "../player.service";

@Component({
    selector: "app-player-card",
    templateUrl: "./player-card.component.html",
    styleUrls: ["./player-card.component.css"],
})
export class PlayerCardComponent {
    constructor(private playerService: PlayerService) {}

    @Input() player: any;

    public deletePlayer() {
        this.playerService.deletePlayer(this.player.playerId);
        this.playerService.getPlayers();
    }
}
