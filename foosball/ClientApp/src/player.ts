export class Player {
    constructor(name: string){
        this.playerId = 0;
        this.name = name;
        this.score = 0;
    }

    public playerId: number;
    public name: string;
    public score: number;
}
