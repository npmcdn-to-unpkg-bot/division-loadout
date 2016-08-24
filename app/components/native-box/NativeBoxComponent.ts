/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, OnInit, HostListener, Output, EventEmitter} from '@angular/core';

import {DivisionService} from "../../service/division.service";
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

    @Input() value: number;
    @Input() name: string;

    
    @HostListener('click', ['$event.target'])
    onClick(btn) {
        
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}