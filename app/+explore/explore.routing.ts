import {RouterModule, Routes} from "@angular/router";
import {DivisionExploreView} from "./explore.view";


const exploreRoutes: Routes = [
    {
        path: '',
        component: DivisionExploreView,

    }
];
export const exploreRouting = RouterModule.forChild(exploreRoutes);

// TODO hier einen subrouter zB explore/sets/striker ...