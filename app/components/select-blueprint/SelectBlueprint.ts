/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Blueprint} from '../../model/blueprint';
import {DivisionItem} from '../../model/DivisionItem';
import {ItemAttribute} from "../item-attribute/item.attribute";
import {DivisionAttribute} from "../../model/division.attribute";
import {PossibleItemAttribute} from "../possible-item-attribute/possible.item.attribute";
import {PossibleDivisionAttribute} from "../../model/PossibleDivisionAttribute";

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";
import {AttributeType, ItemSlotType} from "../../model/DivisionTypes";
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";



@Component({
    selector: 'select-blueprint',
    directives:[ItemAttribute, PossibleItemAttribute, NativeBoxComponent, ItemQualityComponent],
    templateUrl: 'app/components/select-blueprint/select-blueprint.html'
})
export class SelectBlueprint implements OnInit {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }
    
    @Input() itemSlotType: ItemSlotType;

    @Output() onBlueprintSelected = new EventEmitter();

    blueprintFilter: string = "";
    possibleBlueprints: Blueprint[];

    ngOnInit() {
        // https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
        // Promises.
        //alert("test: " + this.itemSlot)
        //this.loadPossibleBlueprints();
        //localStorage.s
        //setInterval(() => this.changeAttributes(), 2000);
        this.possibleBlueprints = this._divisionService.getBlueprintsBySlot(this.itemSlotType);
    }

    selectBlueprint(bp: Blueprint){
        this.onBlueprintSelected.emit(bp);
    }

    getFilteredBlueprints(): Blueprint[] {
        return this.possibleBlueprints
            .filter(bp => bp.name.toUpperCase().includes(this.blueprintFilter.toUpperCase()))
            .sort((left,right) => {
            if (left.gearscore > right.gearscore) {
                return -1;
            }

            if (left.gearscore < right.gearscore) {
                return 1;
            }

            return 0;
        });
    }
}
