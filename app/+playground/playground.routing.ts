import {RouterModule, Routes} from "@angular/router";
import {PlaygroundView} from "./playground.view";

const playgroundRoutes: Routes = [
    {
        path: '',
        component: PlaygroundView,

    }
];
export const playgroundRouting = RouterModule.forChild(playgroundRoutes);