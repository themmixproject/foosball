import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { Game } from "src/game";
import { Team } from "src/team";

@Injectable({
    providedIn: "root",
})
export class GameService {
    execChange: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        this.baseUrl = baseUrl;
        this.getGames();
    }

    public games: Game[] = [];
    private _options = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    public baseUrl: string;

    public increaseScore(teamId: number, memberId: number) {
        this.http
            .put(this.baseUrl + "api/score/increase/" + teamId + "/" + memberId, null)
            .subscribe(() => {
                this.getGames();
            });
    }
    
    public decreaseScore(teamId: number, memberId: number) {
        this.http
            .put(this.baseUrl + "api/score/decrease/" + teamId + "/" + memberId, null)
            .subscribe(() => {
                this.getGames();
            });
    }

    public getGames() {
        this.http
            .get<Game[]>(this.baseUrl + "api/game", this._options)
            .subscribe((result) => {
                this.games = result;
                this.execChange.next(this.games);
            });
    }

    public createGame(teams: Team[]) {
        this.games.push(new Game(teams));
        this.http
            .post(
                this.baseUrl + "api/game",
                JSON.stringify(teams),
                this._options
            )
            .subscribe(() => {});
        this.execChange.next(this.games);
    }

    public getGameById(id: number) {
        for (let i = 0; i < this.games.length; i++) {
            if (this.games[i].gameId == id) {
                return this.games[i];
            }
        }

        return this.games[0];
    }
}
