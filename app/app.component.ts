import { Component, Directive, HostBinding, Input } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
//import {Devtools, devtoolsConfig } from '@ngrx/devtools'

import {DivisionVendorsView} from "./+vendors/DivisionVendorsView";
import {DivisionMapView} from "./+map/DivisionMapView";
import {DivisionBlueprintView} from "./+blueprints/DivisionBlueprintView";
import {DivisionAboutView} from "./+about/DivisionAboutView";
import {DivisionLoadoutView} from "./+loadout/DivisionLoadoutView";
import {DivisionItemView} from "./+item/DivisionItemView";
import {DivisionSharedLoadoutsView} from "./+loadouts-shared/DivisionSharedLoadoutsView";
import {DivisionExploreView} from "./+explore/DivisionExploreView";

import {GearItemComponent} from "./components/gear-item/GearItemComponent";
import {SummaryComponent} from "./components/summary/SummaryComponent";

import {UtilityService} from "./service/utility.service";
import {DivisionService} from "./service/division.service";

import {Logger} from "./service/logger.service";

import {LoadoutService, LoadoutState} from "./service/LoadoutService";

import {FirebaseService} from "./service/FirebaseService";
import {NAVBAR_DIRECTIVES} from "./shared/navbar/Navbar";
import {PageNotFoundComponent} from "./util/PageNotFoundComponent";
import {DivisionStashView} from "./+stash/DivisionStashView";

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import {DivisionOldLoadoutView} from "./+loadout_old/DivisionOldLoadoutView";
import {ReduxService} from "./service/ReduxService";
//import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
    selector: "division-app",
    directives: [
        // Angular-Material
        MD_SIDENAV_DIRECTIVES,
        //MD_GRID_LIST_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdToolbar, MdIcon, MdButton, 
        
        // Other
        GearItemComponent, SummaryComponent, ROUTER_DIRECTIVES, 
       // Devtools, 
        NAVBAR_DIRECTIVES
    ],
    providers: [MdIconRegistry,
        
        DivisionLoadoutView, DivisionBlueprintView, DivisionVendorsView, DivisionMapView,
        LoadoutService, DivisionService, Logger, UtilityService, FirebaseService,
        ReduxService
        
        //devtoolsConfig({
        //    position: 'bottom',
        //    visible: false,
        //    size: 0.3
        //})
    ],
    templateUrl: "app/division-app.html"
})
/* @Routes([
    { path: '/loadout',         component: DivisionLoadoutView          },
    { path: '/loadout_old',         component: DivisionOldLoadoutView          },
    //{ path: '/stash_old',       component: DivisionOldStashView            },
    { path: '/stash',           component: DivisionStashView         },
    { path: '/loadouts_shared', component: DivisionSharedLoadoutsView   },
    { path: '/vendors',         component: DivisionVendorsView          },
    { path: '/item',            component: DivisionItemView             }, 
    { path: '/map',             component: DivisionMapView              },
    { path: '/blueprints',      component: DivisionBlueprintView        },
    { path: '/about',           component: DivisionAboutView            },
    { path: '/explore',         component: DivisionExploreView          },
    { path: '/explore/*',       component: DivisionExploreView          },
    { path: '/*',               component: PageNotFoundComponent        },
    { path: '',                 component: PageNotFoundComponent        }
])*/
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
