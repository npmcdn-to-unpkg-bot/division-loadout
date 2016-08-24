/**
 * Created by Alex on 15.05.2016.
 */
import { Component, OnDestroy, Input, Output, EventEmitter, Type, ViewRef, HostBinding } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
    selector: 'dialog',   
    styles: [
        '.dev-modal { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); display: block;}',
        '.host-modal { display: block;}'
    ],
    template: `
        <div class="dev-modal">
            <div class="dev-dialog" style="background-color: white; height: 400px; width: 400px;">
                <div class="content">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `
})
export class DialogComponent implements OnDestroy {
    visible: boolean = false;

    @Output() onClose: EventEmitter<any> = new EventEmitter(false);
    @Output() onDismiss: EventEmitter<any> = new EventEmitter(false);
    @Output() onOpen: EventEmitter<any> = new EventEmitter(false);

    //@HostBinding('class.fade') get fadeClass(): boolean { return this.animation; }
    //@HostBinding('attr.data-keyboard') get dataKeyboardAttr(): boolean { return this.keyboard; }
    //@HostBinding('attr.data-backdrop') get dataBackdropAttr(): string | boolean { return this.backdrop; }

    @HostBinding('style.display') get hostModal(): string { return this.visible ? 'block' : 'none'; }
    @HostBinding('style.z-index') get z(): string { return '12345'; }

    constructor(viewRef: ViewRef) {
        

        /*this.instance = new ModalInstance(this.element);

        this.instance.hidden.subscribe((result) => {
            this.visible = this.instance.visible;
            if (result === ModalResult.Dismiss)
                this.onDismiss.emit(undefined);
        });

        this.instance.shown.subscribe(() => {
            this.onOpen.emit(undefined);
        });*/
    }

    ngOnDestroy() {
        //return this.instance && this.instance.destroy();
    }

    open(): void {
        this.visible = true;
    }

    close(): void {

    }

    dismiss(): void {
        this.visible = false;
    }
}