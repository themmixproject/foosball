import { Player } from "./player";

export class Team {
    constructor(name: string){
        this.teamId = 0;
        this.name = name;
        this.players = [];
    }

    public teamId: number;
    public name: string;
    public players: Array<Player>;
}
