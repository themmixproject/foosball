import { Player } from "src/player";

export class TeamMember {
    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.score = 0;
    }

    public player: Player;
    public score: number;
}
