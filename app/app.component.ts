import { Component, Directive, HostBinding, Input } from "@angular/core";

import {LoadoutService, LoadoutState} from "./service/LoadoutService";
import {FirebaseService} from "./service/FirebaseService";

@Component({
    selector: "division-app",
    templateUrl: "app/division-app.html"
})
export class AppComponent {
    constructor(private firebaseService: FirebaseService, private loadoutService:LoadoutService) {

    }

    share(){
        this.firebaseService.share();
    }

    localSave(){
        this.loadoutService.localSave();
    }

    title = "Division Loadout";
}
