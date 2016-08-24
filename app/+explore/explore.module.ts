import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {exploreRouting} from "./explore.routing";
import {DivisionExploreView} from "./explore.view";

@NgModule({
    imports:      [
        CommonModule,
        exploreRouting
    ],
    declarations: [
        DivisionExploreView
    ],
    exports:      [
        DivisionExploreView
    ],
    providers:    []
})
export class ExploreViewModule {}

