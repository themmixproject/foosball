import { Player } from "src/player";

export class TeamMember {
    constructor(player: Player) {
        this.player = player;
        this.score = 0;
    }

    public player: Player;
    public score: number;
}
