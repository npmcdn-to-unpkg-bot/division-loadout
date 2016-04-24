import { Component, Directive, HostBinding, Input } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DivisionPlannerView} from "./views/planner/DivisionPlannerView";
import {DivisionVendorsView} from "./views/vendors/DivisionVendorsView";
import {DivisionMapView} from "./views/map/DivisionMapView";

import {GearItemComponent} from "./components/gear-item/GearItemComponent";
import {SummaryComponent} from "./components/summary/summary";

import {SharedService} from "./service/shared.service";
import {UtilityService} from "./service/utility.service";
import {DivisionService} from "./service/division.service";

import {Logger} from "./service/logger.service";
import {DivisionBlueprintView} from "./views/blueprints/DivisionBlueprintView";
import {DivisionAboutView} from "./views/about/DivisionAboutView";

@Component({
    selector: "division-app",
    directives: [GearItemComponent, SummaryComponent, ROUTER_DIRECTIVES],
    providers: [DivisionPlannerView, DivisionBlueprintView, DivisionVendorsView, DivisionMapView, 
        DivisionService, SharedService, Logger, UtilityService, ROUTER_PROVIDERS],
    templateUrl: "app/division-app.html"
})
@RouteConfig([
    { path: '/loadout',     name: 'DivisionLoadout',        component: DivisionPlannerView,     useAsDefault: true },
    { path: '/vendors',     name: 'DivisionVendors',        component: DivisionVendorsView }, 
    { path: '/map',         name: 'DivisionMap',            component: DivisionMapView },
    { path: '/blueprints',  name: 'DivisionBlueprints',     component: DivisionBlueprintView },
    { path: '/about',       name: 'DivisionAbout',          component: DivisionAboutView }
])
export class AppComponent {
   title = "Division Loadouts";
}
