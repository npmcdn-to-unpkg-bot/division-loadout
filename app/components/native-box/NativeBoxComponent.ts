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
    selector: 'native-box',
    styleUrls: ['app/components/native-box/native-box.css'],
    templateUrl: 'app/components/native-box/native-box.html'
})
export class NativeBoxComponent {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() value: string;
    @Input() name: string;
    editing: boolean;

    @Output() onUpdate = new EventEmitter();
    
    @HostListener('click', ['$event.target'])
    onClick(btn) {
        this.editing = !this.editing;
        
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}