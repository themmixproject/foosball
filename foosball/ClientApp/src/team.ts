import { TeamMember } from "./team-member";

export class Team {
    constructor(name: string, members: TeamMember[] = []){
        this.teamId = 0;
        this.name = name;
        this.score = 0;
        this.members = members;
    }

    public teamId: number;
    public name: string;
    public score: number;
    public members: Array<TeamMember>;
}
