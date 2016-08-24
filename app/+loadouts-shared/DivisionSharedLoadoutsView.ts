/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "@angular/core";
import {DivisionService} from "../service/division.service";
import {Blueprint} from "../model/blueprint";
//import {AngularFire,FirebaseListObservable} from "angularfire2";

@Component({
    selector: "division-shared-loadouts",
    directives: [],
    templateUrl: "app/+loadouts-shared/division.html"
})
export class DivisionSharedLoadoutsView {
    /*items: FirebaseListObservable<any[]>;

    constructor(af: AngularFire,
                private router: Router) {
        this.items = af.database.list('/loadouts');
    }


    onClick(event, item) {
        this.router.navigate(['loadout', { id: item.$key}]);
    }*/
}
