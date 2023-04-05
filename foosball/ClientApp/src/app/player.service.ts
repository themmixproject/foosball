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
        this.baseUrl = baseUrl;
        this.getPlayers();
    }

    private baseUrl: string = "";
    private _options = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    public players: Array<Player> = [];

    public getPlayers() {
        this.http.get<Player[]>(
            this.baseUrl + "api/player",
            this._options
        ).subscribe((result) => {
            this.players = result;
            console.log(result);
        })
    }

    public createPlayer(playerName: string) {
        const playerResult$ = this.http.post(
            this.baseUrl + "api/player",
            JSON.stringify({ name: playerName }),
            this._options
        ).subscribe(() => {
            this.getPlayers();
        });
    }

    public deletePlayer(playerId: number) {
        const deleteResult$ = this.http.delete(
            this.baseUrl + "api/player/" + playerId,
            this._options
        ).subscribe(() => {
            this.getPlayers();
        });
    }
}
