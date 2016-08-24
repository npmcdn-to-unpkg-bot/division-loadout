/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, OnInit, ElementRef, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {AttributeDescriptor, NumberType} from "../../model/AttributeDescriptor";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: 'possible-item-attribute',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[
        `.input-item-attribute {
            border: 0px dashed white;
            padding: 0;
            background-color: rgb(31, 31, 31);
            color: orange;
            text-align: center;
            width: 100%; /* Fixes FF bugging around at input width */
            height: 100%;
            }`
    ],
    templateUrl: 'app/components/possible-item-attribute/possible-item-attribute.html'
})
export class PossibleItemAttribute implements OnInit {
    constructor(private utilityService: UtilityService,
                private logger: Logger) { }

    @Input() attribute: AttributeDescriptor;
    @Input() single: boolean = false;
    inputValue: number | boolean;

    @Output() onAttributeChanged = new EventEmitter();

    
    
    ngOnInit() {
        if(this.attribute.value != null){
            // copy the actual value from the state (CurrentValue) into the temporary state of this Component (attributeValue)
            this.inputValue = this.attribute.value;
        }
    }

    isDisabled() : boolean {
        if(this.attribute.datatype != null) {
            // TODO typecheck error
            //return this.attribute.datatype.min == this.attribute.datatype.max;
            return false;
        }
        return true;
    }

    showChecked() : boolean {
        return this.attribute.value != null;
    }

    onChangeText(event){
        if(this.inputValue == null)
            return;

        this.fireChangedEvent({
            attribute: Object.assign({}, this.attribute, { value: this.inputValue }),
            checked: true
        });
    }
    
    toggleChecked() : void {
        this.fireChangedEvent({
            attribute: Object.assign({}, this.attribute),
            checked: !this.showChecked()
        });
    }

    fireChangedEvent(event){
        this.onAttributeChanged.emit(event);
    }

    getAttributeText(attr:AttributeDescriptor) : string {
        if(attr.attributeType == "gear_talent"){
            return attr.attribute;
        }
        return this.utilityService.getAttributeText(attr);
    }
}