import {Component, Input, OnInit, HostListener, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {AttributeDescriptor} from "../../model/AttributeDescriptor";

import {DivisionService} from "../../service/division.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";
import {htmlTemplate} from "./talent-box.html";
import {AttributeActivePipe} from "../../pipes/AttributeActivePipe";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {PossibleItemAttribute} from "../possible-item-attribute/possible.item.attribute";
import {ItemAttribute} from "../item-attribute/item.attribute";

/**
 * Created by Alex on 21.04.2016.
 */
@Component({
    selector: 'talent-box',
    directives:[PossibleItemAttribute, ItemAttribute, TalentBoxComponent],
    styles: [
      `.talent-box {
            background-color: #282828;
      }`
    ],
    pipes:[AttributeActivePipe],
    template: htmlTemplate
})
export class TalentBoxComponent {
    constructor(private _utilService: UtilityService) { }

    @Input() max: number;
    @Input() editing: boolean;
    @Input() attributes: AttributeDescriptor[] = [];

    @Output() changed = new EventEmitter();
    @Output() removed = new EventEmitter();

    get Attributes(){
        if(!this.editing){
            return this.attributes.filter(attr => attr.value != null);
        }

        if(this.max != null && this.attributes.filter(attr => attr.value != null).length >= this.max){
            // just return the already active attributes
            // because the max count of attributes is already selected
            return this.attributes.filter(attr => attr.value != null);
        }

        return this.attributes;
    }

    countSelected() : number {
        if(this.attributes == null){
            return null;
        }
        return this.attributes.filter(attr => attr.value != null).length;
    }

    getAttributeText(attr:AttributeDescriptor) : string {
        return this._utilService.getAttributeText(attr);
    }

    getAttributeValue(attr:AttributeDescriptor) : string {
        return this._utilService.getAttributeValue(attr);
    }

    onAttributeChanged(event: { attribute: AttributeDescriptor, checked: boolean }) : void {
        if(event.checked){
            this.changed.emit(event.attribute);
        } else {
            this.removed.emit(event.attribute);
        }
    }
}