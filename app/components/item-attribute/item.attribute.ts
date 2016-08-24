/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {UtilityService} from "../../service/utility.service";
import {htmlTemplate} from "./item-attribute.html";
import {AttributeDescriptor} from "../../model/AttributeDescriptor";

@Component({
    selector: 'item-attribute',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: htmlTemplate
})
export class ItemAttribute {
    constructor(private _utilService: UtilityService) { }

    @Input() attribute: AttributeDescriptor;
    
    getAttributeText(attr:AttributeDescriptor) : string {
        return this._utilService.getAttributeText(attr);
    }

    getAttributeValue(attr:AttributeDescriptor) : string {
        return this._utilService.getAttributeValue(attr);
    }
    
    @HostListener('click', ['$event.target'])
    onClick(btn) {

    }
}