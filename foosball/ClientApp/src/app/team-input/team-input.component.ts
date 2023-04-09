import { Component, Input } from "@angular/core";
import { Team } from "src/team";

@Component({
    selector: "app-team-input",
    templateUrl: "./team-input.component.html",
    styleUrls: ["./team-input.component.css"],
})
export class TeamInputComponent {
    constructor(){this.team = new Team("")}
    @Input() team: Team;
}
