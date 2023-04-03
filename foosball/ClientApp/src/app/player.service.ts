import { Injectable } from "@angular/core";
import { Player } from "src/player";

@Injectable({
    providedIn: "root",
})

export class PlayerService {
    constructor() {
        this.players.push(
            new Player("Joey"),
            new Player("Bryan")
        )
    }
    
    public players : Array<Player> = [];
}
