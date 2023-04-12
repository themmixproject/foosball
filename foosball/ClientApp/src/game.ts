import { Team } from "./team";

export class Game {
    constructor(teams : Team[]){
        this.teams = teams;
        this.gameId  = 0;
    }

    public gameId : number;
    public teams : Team[];
}