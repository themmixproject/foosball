import { Injectable } from "@angular/core";
import { Player } from "src/player";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PlayerService {
    constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        this.updatePlayers();

        // setTimeout(() => {
        //     this.players.push(new Player("Tim"));
        // }, 1500);
    }

    private baseUrl: string = "";
    private _options = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    public players: Array<Player> = [];

    public async updatePlayers() {
        console.log(this.baseUrl + "api/player");

        const players$ = this.http.get<Player[]>(
            this.baseUrl + "api/player",
            this._options
        );

        this.players = await firstValueFrom(players$);
    }

    public async createPlayer(playerName: string) {
        const playerResult$ = this.http.post(
            this.baseUrl + "api/player",
            JSON.stringify({ name: playerName }),
            this._options
        );

        await firstValueFrom(playerResult$);
    }
}
