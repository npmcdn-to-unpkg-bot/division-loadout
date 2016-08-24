/**
 * Created by Alex on 15.05.2016.
 */
import { Type } from '@angular/core';

import { NavbarBrandComponent } from "./components/nav-brand";
import { NavbarCollapseComponent } from "./components/nav-collapsed";
import { NavbarItemComponent } from "./components/nav-item";
import { NavbarItemListComponent } from "./components/nav-item-list";
import { NavbarTogglerComponent } from "./components/nav-toggler";
import { NavbarComponent } from "./components/navbar";

export * from './components/nav-brand';
export * from './components/nav-collapsed';
export * from './components/nav-item';
export * from './components/nav-item-list';
export * from './components/nav-toggler';
export * from './components/navbar';

export const NAVBAR_DIRECTIVES: Type[] = [
    NavbarBrandComponent,
    NavbarCollapseComponent,
    NavbarItemComponent,
    NavbarItemListComponent,
    NavbarTogglerComponent,
    NavbarComponent
];