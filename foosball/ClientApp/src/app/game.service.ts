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

    public game(index: number) {
        let game: Game = this.games[index];
        return {
            increaseScore(teamIndex: number, teamMemberIndex: number) {
                let team = game.teams[teamIndex];
                team.score++;
                team.members[teamMemberIndex].score++;
                team.members[teamMemberIndex].player.score++;
            },
            decreaseScore(teamIndex: number, teamMemberIndex: number) {
                let team = game.teams[teamIndex];
                let teamMember = team.members[teamMemberIndex];
                if (team.score > 0 && teamMember.score > 0) {
                    team.score--;
                    team.members[teamMemberIndex].score--;
                    team.members[teamMemberIndex].player.score--;
                }
            },
        };
    }

    public getGames() {
        this.http
            .get<Game[]>(this.baseUrl + "api/game", this._options)
            .subscribe((result) => {
                this.games = result;
                this.execChange.next(this.games);
                console.log(result);
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
}
