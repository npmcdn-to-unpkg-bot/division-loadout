import {RouterModule, Routes} from "@angular/router";
import {DivisionAboutView} from "./about.view";

const aboutRoutes: Routes = [
    {
        path: '',
        component: DivisionAboutView,

    }
];
export const aboutRouting = RouterModule.forChild(aboutRoutes);