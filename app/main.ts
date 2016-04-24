import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from "angular2/core";
import {LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from "angular2/router";

//import {enableProdMode} from 'angular2/core';

//enableProdMode();

bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
