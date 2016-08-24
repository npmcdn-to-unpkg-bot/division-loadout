/**
 * Created by Alex on 15.05.2016.
 */
import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-toggler',
    directives: [],
    template: `
        <button class="navbar-toggler" type="button">
            &#9776;
        </button>
    `
})
export class NavbarTogglerComponent {
    
    @Output() toggle = new EventEmitter();

    @HostListener('click')
    onClick() {
        this.toggle.emit({});
    }    
}