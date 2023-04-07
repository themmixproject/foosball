import { Team } from "./team";

export class Game {
    constructor(teams){
        this.teams = teams;
        this.scores = [0 ,0]
    }

    public teams : Team[];
    public scores: number[];
}