/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {ItemAttribute} from "../item-attribute/item.attribute";
import {PossibleItemAttribute} from "../possible-item-attribute/possible.item.attribute";
import {Logger} from "../../service/logger.service";
import {AttributeDescriptor} from "../../model/AttributeDescriptor";
import {htmlTemplate} from './attributes-selector.html';

@Component({
    selector: 'attributes-selector',
    directives:[ItemAttribute, PossibleItemAttribute],
    providers:[],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: htmlTemplate
})
export class AttributesSelectorComponent {
    constructor(private logger: Logger) { }

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

    onAttributeChanged(event: { attribute: AttributeDescriptor, checked: boolean }) : void {
        if(event.checked){
            this.changed.emit(event.attribute);
        } else {
            this.removed.emit(event.attribute);     
        }
    }
}
