/**
 * Created by Alex on 15.05.2016.
 */
import { Component, Input } from '@angular/core';
import { NavbarItemComponent } from "./nav-item";

@Component({
    selector: 'nav-list',
    directives: [NavbarItemComponent],
    template: `
        <ul [class.nav-stacked]="vertical"
            [class.nav-pills]="vertical"
            [class.nav]="!vertical"
            [class.navbar-nav]="!vertical">
           <ng-content></ng-content>
        </ul>
        `
})
export class NavbarItemListComponent {    
    @Input() vertical = false;

    //@HostBinding('class.nav-stacked') get navStacked(): boolean { return this.vertical; }
    //@HostBinding('class.nav-pills') get navPills(): boolean { return this.vertical; }

    //@HostBinding('class.nav') get nav(): boolean { return !this.vertical; }
    //@HostBinding('class.navbar-nav') get navbarNav(): boolean { return !this.vertical; }

}