import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AlertService {
    public test(){
        console.log("Hello world!");
    }
}
