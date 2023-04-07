import { Injectable } from "@angular/core";
import { Game } from "src/game";
import { Player } from "src/player";
import { Team } from "src/team";

@Injectable({
    providedIn: "root",
})
export class GameService {
    constructor() {
        this.games = [
            new Game([
                new Team("Red", [new Player("Gregg"), new Player("Toby")]),
                new Team("Blue", [new Player("Natasha"), new Player("Sophie")]),
            ]),
        ];
    }
    public games: Game[];
}
