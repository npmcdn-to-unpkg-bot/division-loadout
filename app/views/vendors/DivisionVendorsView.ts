/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: "division-vendors",
    directives: [],
    providers: [DivisionService, SharedService, Logger, UtilityService, ROUTER_PROVIDERS],
    templateUrl: "app/views/vendors/division.html"
})
export class DivisionVendorsView {


}
