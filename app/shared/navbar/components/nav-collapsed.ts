/**
 * Created by Alex on 15.05.2016.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'nav-collapsed',
    directives: [],
    template: `
        <div [class.collapsing]="!visible" [hidden]="!visible">
            <ng-content></ng-content>
        </div>
    `
})
export class NavbarCollapseComponent {
//[ngClass]="{'transition': collapsing}"
    visible = false;
    // TODO animation wie in bootstrap
    toggle(){
        console.log("toggle");
        this.visible = !this.visible;
    }
}