/**
 * Created by Alex on 15.05.2016.
 */
import { Directive, ElementRef } from '@angular/core';
import { DialogComponent } from '../components/dialog';

@Directive({
    selector: '[autofocus]'
})
export class AutofocusDirective {
    constructor(private el: ElementRef, private modal: DialogComponent) {
        if (modal != null) {
            this.modal.onOpen.subscribe(() => {
                this.el.nativeElement.focus();
            });
        }
    }
}