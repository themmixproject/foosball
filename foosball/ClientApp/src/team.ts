import { Player } from "./player";

export class Team {
    constructor(name: string, players: Player[] = []){
        this.teamId = 0;
        this.name = name;
        this.score = 0;
        this.players = players;
    }

    public teamId: number;
    public name: string;
    public score: number;
    public players: Array<Player>;
}
