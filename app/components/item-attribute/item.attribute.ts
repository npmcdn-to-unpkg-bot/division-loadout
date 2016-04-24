/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, OnInit, HostListener, Output, EventEmitter} from 'angular2/core';
import {Blueprint} from '../../model/blueprint';
import {DivisionItem} from '../../model/DivisionItem';

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: 'item-attribute',
    templateUrl: 'app/components/item-attribute/item-attribute.html'
})
export class ItemAttribute {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() attributeId: string;
    @Input() attributeValue: string;
    @Input() editing: boolean;

    @Output() myevent = new EventEmitter();


    checked: boolean;

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        if(!this.editing){
            //this.editing = true;
        } else {
            //this.editing = false;
        }
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}