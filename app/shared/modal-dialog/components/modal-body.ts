/**
 * Created by Alex on 15.05.2016.
 */
import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { DialogComponent } from './dialog';

@Component({
    selector: 'modal-body',
    template: `
        <div class="modal-body">
            <ng-content></ng-content>
        </div>
    `
})
export class ModalBodyComponent {
    constructor(private modal: DialogComponent) { }
}