import {platformBrowserDynamic}    from '@angular/platform-browser-dynamic';

import {enableProdMode} from '@angular/core';
import {environment} from "./environment";
import {AppModule} from "./app.module";

//import {instrumentStore, Devtools} from '@ngrx/devtools'

/*import {
    FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from "angularfire2";*/
/*import {AuthEffects} from "./redux/effects/AuthEffects";*/

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//bootstrap(AppComponent,[
 //   provideStore({divisionItems, auth, stash}),
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

  //  HTTP_PROVIDERS
//]);
