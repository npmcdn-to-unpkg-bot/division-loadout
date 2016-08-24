/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "@angular/core";
import {DivisionService} from "../service/division.service";
import {Blueprint} from "../model/blueprint";

@Component({
    selector: "division-explore",
    templateUrl: "app/+explore/division.html"
})
export class DivisionExploreView {
    constructor(private divisionService: DivisionService) {

    }


    getBlueprints() : Blueprint[] {
        return this.divisionService.getBlueprints();
    }
}
