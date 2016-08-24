import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {environment} from "./environment";
import {provideStore} from '@ngrx/store';
import {divisionItems} from './redux/DivisionItemReducer';
import {auth} from './redux/AuthReducer';
import {stash} from './redux/StashReducer';
import {APP_ROUTER_PROVIDERS} from "./app.routes";

//import {instrumentStore, Devtools} from '@ngrx/devtools'

/*import {
    FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from "angularfire2";*/
/*import {AuthEffects} from "./redux/effects/AuthEffects";*/

if (environment.production) {
    enableProdMode();
}


bootstrap(AppComponent,[
    provideStore({divisionItems, auth, stash}),
    // TODO eigene Stash-Middleware. Ähnlich eines UndoReducers. Vereinfacht das ganze hin und herkopieren
    // dann kann stash naemlich aus dem store raus (würde dann in den reducer wandern)
    //localStorageMiddleware(['stash'], true),
    //instrumentStore(),
    /*runEffects(AuthEffects),*/
    
    /* FIREBASE_PROVIDERS,
    defaultFirebase('https://division-loadout.firebaseio.com'),
    firebaseAuthConfig({
        provider: AuthProviders.Anonymous,
        method: AuthMethods.Anonymous
    }), */

    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);