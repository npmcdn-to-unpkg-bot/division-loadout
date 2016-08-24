/**
 * Created by Alex on 24.06.2016.
 */
import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./util/PageNotFoundComponent";
import {DivisionItemView} from "./+item/DivisionItemView";
import {DivisionSharedLoadoutsView} from "./+loadouts-shared/DivisionSharedLoadoutsView";
import {DivisionStashView} from "./+stash/DivisionStashView";
import {DivisionOldLoadoutView} from "./+loadout_old/DivisionOldLoadoutView";
import {DivisionLoadoutView} from "./+loadout/DivisionLoadoutView";

export const routes: Routes = [
    { path: 'about',        loadChildren: 'app/+about/about.module#AboutViewModule'                 },
    { path: 'playground',   loadChildren: 'app/+playground/playground.module#PlaygroundViewModule'  },
    { path: 'explore',      loadChildren: 'app/+explore/explore.module#ExploreViewModule'           },


    { path: 'loadout',         component: DivisionLoadoutView          },
    { path: 'loadout_old',         component: DivisionOldLoadoutView          },
    { path: 'stash',           component: DivisionStashView         },
    { path: 'loadouts_shared', component: DivisionSharedLoadoutsView   },
    { path: 'item',            component: DivisionItemView             },
    { path: '*',               component: PageNotFoundComponent        },
    {
        path: '',
        redirectTo: '/playground',
        pathMatch: 'full'
    }
];
