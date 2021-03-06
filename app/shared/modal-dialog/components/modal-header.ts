/**
 * Created by Alex on 15.05.2016.
 */
import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { DialogComponent } from './dialog';

@Component({
    selector: 'modal-header',
    template: `
        <div class="modal-header">
            <button *ngIf="showClose" type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="modal.dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
            <ng-content></ng-content>
        </div>
    `
})
export class ModalHeaderComponent {
    @Input('show-close') showClose: boolean = false;
    constructor(private modal: DialogComponent) { }
}