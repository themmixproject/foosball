import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Game } from "src/game";
import { Player } from "src/player";
import { Team } from "src/team";
import { TeamMember } from "src/team-member";

@Injectable({
    providedIn: "root",
})
export class GameService {
    execChange: Subject<any> = new Subject<any>();

    constructor() {
        this.games = [
            new Game([
                new Team("Red", [
                    new TeamMember(new Player("Gregg")),
                    new TeamMember(new Player("Toby")),
                ]),
                new Team("Blue", [
                    new TeamMember(new Player("Natasha")),
                    new TeamMember(new Player("Sophie")),
                ]),
            ]),
        ];
    }

    public games: Game[];

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

    public createGame(teams : Team[]){
        this.games.push(new Game(teams));
        this.execChange.next(this.games);
    }
}
