import { Team } from "./team";

export class Game {
    constructor(teams : Team[]){
        this.teams = teams;
    }

    public teams : Team[];
}