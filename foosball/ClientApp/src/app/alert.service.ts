import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AlertService {

    private toggleAlertSource = new Subject<any>;
    toggleAlertCalled$ = this.toggleAlertSource.asObservable();

    public toggleAlert(alertMessage: string) {
        this.toggleAlertSource.next(alertMessage);
        console.log(alertMessage);
    }
}
