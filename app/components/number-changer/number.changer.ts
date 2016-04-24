/**
 * Created by Alex on 10.04.2016.
 */
import {Component, Input, OnInit, HostListener, Output, EventEmitter} from 'angular2/core';
import {DivisionService} from "../../service/division.service";
import {Logger} from "../../service/logger.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";

@Component({
    selector: 'number-changer',
    templateUrl: 'templates/number-changer.html'
})
export class NumberChanger {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() attributeId: string;
    @Input() attributeValue: string;

    @Output() myevent = new EventEmitter();

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        this.myevent.emit("Hello event!")
    }
}