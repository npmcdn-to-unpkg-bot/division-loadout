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
import {ItemQuality} from "../../model/DivisionTypes";

@Component({
    selector: 'item-quality',
    styleUrls: ['app/components/item-quality/item-quality.css'],
    templateUrl: 'app/components/item-quality/item-quality.html'
})
export class ItemQualityComponent {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() quality: ItemQuality;

    @HostListener('click', ['$event.target'])
    onClick(btn) {


        //alert("ItemQualityIndicator");
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}