/**
 * Created by Alex on 15.05.2016.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'nav-brand',
    directives: [],
    styles: [
      `.dev-navbar {
        cursor: pointer;
          float: left;
          padding-top: .25rem;
          padding-bottom: .25rem;
          margin-right: 1rem;
          font-size: 1.25rem;
      }`
    ],
    template: `
        <span class="dev-navbar">
            <ng-content></ng-content>
        </span>
    `
})
export class NavbarBrandComponent {
}