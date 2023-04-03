import { Component } from "@angular/core";

@Component({
    selector: "app-alert-screen",
    templateUrl: "./alert-screen.component.html",
    styleUrls: ["./alert-screen.component.css"],
})

export class AlertScreenComponent {
    public alertText : string = "Warning!";
    public alertDisplay :boolean  = false;

    public toggleAlert (alertText : string){
        this.alertText = alertText;
        this.alertDisplay = !this.alertDisplay;
    }

    public closeAlert (){
        this.alertDisplay = !this.alertDisplay;
    }
}
