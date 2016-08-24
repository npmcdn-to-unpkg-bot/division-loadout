import {Directive, AfterViewInit} from '@angular/core';
declare var componentHandler;

/**
 * Created by Alex on 21.05.2016.
 */
@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}