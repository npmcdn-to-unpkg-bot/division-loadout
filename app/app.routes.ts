/**
 * Created by Alex on 24.06.2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {PageNotFoundComponent} from "./util/PageNotFoundComponent";
import {DivisionExploreView} from "./+explore/DivisionExploreView";
import {DivisionBlueprintView} from "./+blueprints/DivisionBlueprintView";
import {DivisionVendorsView} from "./+vendors/DivisionVendorsView";
import {DivisionItemView} from "./+item/DivisionItemView";
import {DivisionMapView} from "./+map/DivisionMapView";
import {DivisionAboutView} from "./+about/DivisionAboutView";
import {DivisionSharedLoadoutsView} from "./+loadouts-shared/DivisionSharedLoadoutsView";
import {DivisionStashView} from "./+stash/DivisionStashView";
import {DivisionOldLoadoutView} from "./+loadout_old/DivisionOldLoadoutView";
import {DivisionLoadoutView} from "./+loadout/DivisionLoadoutView";

export const routes: RouterConfig = [
    { path: 'loadout',         component: DivisionLoadoutView          },
    { path: 'loadout_old',         component: DivisionOldLoadoutView          },
    //{ path: '/stash_old',       component: DivisionOldStashView            },
    { path: 'stash',           component: DivisionStashView         },
    { path: 'loadouts_shared', component: DivisionSharedLoadoutsView   },
    { path: 'vendors',         component: DivisionVendorsView          },
    { path: 'item',            component: DivisionItemView             },
    { path: 'map',             component: DivisionMapView              },
    { path: 'blueprints',      component: DivisionBlueprintView        },
    { path: 'about',           component: DivisionAboutView            },
    { path: 'explore',         component: DivisionExploreView          },
    { path: 'explore/*',       component: DivisionExploreView          },
    { path: '*',               component: PageNotFoundComponent        },
    { path: '',                 component: PageNotFoundComponent        }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];