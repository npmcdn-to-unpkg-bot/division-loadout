/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "angular2/core";
import {DivisionService} from "../../service/division.service";
import {Logger} from "../../service/logger.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: "division-map",
    directives: [],
    providers: [DivisionService, SharedService, Logger, UtilityService, ROUTER_PROVIDERS],
    templateUrl: "app/views/map/division.html"
})
export class DivisionMapView {


}
