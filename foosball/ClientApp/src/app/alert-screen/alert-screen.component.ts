import { Component } from "@angular/core";
import { AlertService } from "../alert.service";

@Component({
    selector: "app-alert-screen",
    templateUrl: "./alert-screen.component.html",
    styleUrls: ["./alert-screen.component.css"],
})
export class AlertScreenComponent {
    constructor(private alertService: AlertService) {
        this.alertService.toggleAlertCalled$.subscribe((alertMessage) => {
            this.toggleAlert(alertMessage);
        });
    }
    
    public alertText: string = "Warning!";
    public alertDisplay: boolean = false;


    public toggleAlert(alertText: string) {
        this.alertText = alertText;
        this.alertDisplay = !this.alertDisplay;
    }

    public closeAlert() {
        this.alertDisplay = !this.alertDisplay;
    }
}
