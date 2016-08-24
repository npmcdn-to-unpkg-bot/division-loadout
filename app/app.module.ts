/**
 * Created by Alex on 10.08.2016.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {divisionItems} from './redux/DivisionItemReducer';
import {auth} from './redux/AuthReducer';
import {stash} from './redux/StashReducer';
import {GearItemComponent} from "./components/gear-item/GearItemComponent";
import {SummaryComponent} from "./components/summary/SummaryComponent";
import {LoadoutService} from "./service/LoadoutService";
import {ReduxService} from "./service/ReduxService";
import {DivisionService} from "./service/division.service";
import {Logger} from "./service/logger.service";
import {UtilityService} from "./service/utility.service";
import {FirebaseService} from "./service/FirebaseService";
import {FormsModule} from "@angular/forms";
import {DivisionLoadoutView} from "./+loadout/DivisionLoadoutView";
import {WeaponItemComponent} from "./components/weapon-item/WeaponItemComponent";
import {StoreModule} from "@ngrx/store";
import {PageNotFoundComponent} from "./util/PageNotFoundComponent";
import {DivisionItemView} from "./+item/DivisionItemView";
import {DivisionSharedLoadoutsView} from "./+loadouts-shared/DivisionSharedLoadoutsView";
import {DivisionStashView} from "./+stash/DivisionStashView";
import {DivisionOldLoadoutView} from "./+loadout_old/DivisionOldLoadoutView";
import {ToolbarModule, SplitButtonModule, ButtonModule} from 'primeng/primeng';
import {AboutViewModule} from "./+about/about.module";
import {ExploreViewModule} from "./+explore/explore.module";
import {PlaygroundViewModule} from "./+playground/playground.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),

        StoreModule.provideStore({divisionItems, auth, stash}, {}),
        FormsModule,

        ToolbarModule,
        SplitButtonModule,
        ButtonModule,

        AboutViewModule,
        ExploreViewModule,
        PlaygroundViewModule
    ],
    declarations: [
        AppComponent,

        WeaponItemComponent,
        GearItemComponent,
        SummaryComponent,

        DivisionLoadoutView,

        DivisionOldLoadoutView,
        DivisionStashView,
        DivisionSharedLoadoutsView,
        DivisionItemView,

        PageNotFoundComponent
    ],
    providers: [
        LoadoutService,
        DivisionService,
        Logger,
        UtilityService,
        FirebaseService,
        ReduxService
    ],
    bootstrap:    [
        AppComponent,
    ]
})
export class AppModule {}