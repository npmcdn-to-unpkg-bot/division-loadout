/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {GearItemComponent} from "../../components/gear-item/GearItemComponent";
import {SummaryComponent} from "../../components/summary/summary";

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: "division-about",
    directives: [GearItemComponent, SummaryComponent],
    providers: [DivisionService, SharedService, Logger, UtilityService, ROUTER_PROVIDERS],
    templateUrl: "app/views/about/division.html"
})
export class DivisionAboutView {


}
