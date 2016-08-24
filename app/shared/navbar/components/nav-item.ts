/**
 * Created by Alex on 15.05.2016.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-item',
    host: {
        'class': 'nav-item'
    },
    directives: [],
    template: `
        <li style="cursor: pointer;">
            <a class="nav-link" [class.active]="routerActive"><ng-content></ng-content></a>
        </li>
        `
})
export class NavbarItemComponent {
    //@Input('class.router-link-active') routerActive: boolean;
}