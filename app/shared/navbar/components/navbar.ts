/**
 * Created by Alex on 15.05.2016.
 */
import { Component, ViewChild } from '@angular/core';
import { NavbarCollapseComponent } from "./nav-collapsed";
import { NavbarTogglerComponent } from "./nav-toggler";
import { NavbarItemListComponent } from "./nav-item-list";

@Component({
    selector: 'navbar',
    directives: [NavbarCollapseComponent, NavbarTogglerComponent, NavbarItemListComponent],
    template: `
        <nav-collapsed class="hidden-md-up">
            <ng-content select="collapsed"></ng-content> 
        </nav-collapsed>
        <nav class="division-nav navbar">
            <div class="container-fluid">
                <div class="hidden-md-up">
                   <nav-toggler (toggle)="onToggle()"></nav-toggler>
                </div>
            
                <div class="hidden-sm-down">
                    <ng-content select="default"></ng-content>
                </div>
            
            </div>
        </nav>
        `
})
export class NavbarComponent {
    // TODO bootstrap.css is still neceasssry atm since i use classes from them
    // TODO so remove the need for the nav-* classes which are used
    // TODO and also for the hidden-sm-down and so on (maybe in a seperate directive)
    // TODO router-link-active bzw active element is not working ...
    @ViewChild(NavbarCollapseComponent) collapseComponent;

    constructor() {

    }

    onToggle(){
        // show/hide menu
        this.collapseComponent.toggle();
    }
}