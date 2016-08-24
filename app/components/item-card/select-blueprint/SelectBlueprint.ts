/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Blueprint} from '../../../model/blueprint';
import {DivisionService} from "../../../service/division.service";
import {ItemSlotType} from "../../../model/DivisionTypes";
import {ItemQualityComponent} from "../../item-quality/ItemQualityComponent";
import {htmlTemplate} from "./select-blueprint.html";


@Component({
    selector: 'select-blueprint',
    directives:[ItemQualityComponent],
    styles: [
      `.blueprint-title {
            text-transform: uppercase;
            margin-bottom: 5px;
        }`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: htmlTemplate
})
export class SelectBlueprint {
    constructor() { }
    
    @Input() title: string;
    @Input() filter: string;
    @Input() possibleBlueprints: Blueprint[];
    
    @Output() selected = new EventEmitter();

    selectBlueprint(bp: Blueprint){
        this.selected.emit(bp);
    }
}
