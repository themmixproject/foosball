import { Injectable } from "@angular/core";
import { Player } from "src/player";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject } from "@angular/core";
import { Subject, firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PlayerService {
    playersChange: Subject<any> = new Subject<any>();
    bestPlayersChange: Subject<any> = new Subject<any>();

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
            this.playersChange.next(this.players);
        })
    }

    public bestPlayers: Array<Player> = [];
    public getBestPlayers() {
        this.http.get<Player[]>(this.baseUrl + "api/player/best/").subscribe((result) => {
            this.bestPlayers = result;
            this.bestPlayersChange.next(this.bestPlayers);
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

    public getPlayerIndexById(playerId: number){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i].playerId == playerId){
                return i;
            }
        }

        return -1;
    }
}
