/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, OnInit, HostListener, Output, EventEmitter, AfterViewInit} from 'angular2/core';

import {Blueprint} from '../../model/blueprint';
import {DivisionItem} from '../../model/DivisionItem';
import {PossibleDivisionAttribute} from "../../model/PossibleDivisionAttribute";

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: 'possible-item-attribute',
    templateUrl: 'app/components/possible-item-attribute/possible-item-attribute.html'
})
export class PossibleItemAttribute implements AfterViewInit, OnInit {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() possibleAttribute: PossibleDivisionAttribute;
    @Input() currentValue: number;
    attributeValue: number;

    @Output() onUpdate = new EventEmitter();

    checked: boolean;

    ngOnInit() {
       /* if(this.currentValue != null){

            this.checked = true;
        }*/
    }

    ngAfterViewInit() {
        // http://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular2
        // wenn attributevlaue leer, dann den max wert eintragen
        if(this.attributeValue == null){

            if(this.currentValue != null){
                this.attributeValue = this.currentValue;

                //  TODO Hack. Weg drumrum finden.
                // Problem: NG2 sagt checked wurde nach DrityCheck verändert
                setTimeout(() => this.checked = true);
            } else {
                this.attributeValue = this.possibleAttribute.max;
            }
        }
    }

    onChangeText(event){
        if(this.attributeValue == null)
            return;

        this.onUpdate.emit([this.attributeValue, true]);
    }

    onChange(event){
        //alert("Change!" + event.target.checked);
        if(this.attributeValue == null)
            return;

        this.onUpdate.emit([this.attributeValue, event.target.checked]);
    }

    //@HostListener('click', ['$event.target'])
    onClick(btn) {

    }
}