/**
 * Created by Alex on 15.05.2016.
 */
import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { DialogComponent } from './dialog';

@Component({
    selector: 'modal-footer',
    template: `
        <div class="modal-footer">
            <ng-content></ng-content>
            <button *ngIf="showDefaultButtons" type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Close</button>
            <button *ngIf="showDefaultButtons" type="button" class="btn btn-primary" (click)="modal.close()">Save</button>
        </div>
    `
})
export class ModalFooterComponent {
    @Input('show-default-buttons') showDefaultButtons: boolean = false;
    constructor(private modal: DialogComponent) { }
}