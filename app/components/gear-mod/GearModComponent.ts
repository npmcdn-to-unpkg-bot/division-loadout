/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
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
import {AttributeType, ItemSlotType, AttributeConsts} from "../../model/DivisionTypes";
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";
import {SelectBlueprint} from "../select-blueprint/SelectBlueprint";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";

@Component({
    selector: 'gear-mod',
    directives:[PossibleItemAttribute, ItemAttribute],
    templateUrl: 'app/components/gear-mod/gear-mod.html'
})
export class GearModComponent implements OnInit {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }
   
    
    @Input() blueprintId: string;
    
    blueprint: Blueprint;
    editing: boolean;

    result: DivisionItem = {       
        "mods": [

        ]
    }
    
    ngOnInit() {
        this.blueprint = this._divisionService.getBlueprintById(this.blueprintId);

        this._logger.log(JSON.stringify(this.blueprint));
    }

    getPossibleAttributes(attributeType: string): PossibleDivisionAttribute[] {
        let result = this.blueprint.possibleAttributes.filter(possAttr => possAttr.attributeType == attributeType);
        this._logger.log("testsetest");
        this._logger.log(JSON.stringify(result));
        return result;
    }

    getCurrentValueForAttribute(attribute:PossibleDivisionAttribute): number {
        let value = this.result.mods.find(attr => attr[0] == attribute.attribute);
        return value == null ? null : value[1];
    }

    saveResultAttribute(attribute: PossibleDivisionAttribute, event: [number, boolean]){
        let attributeValue:number = event[0];
        let checked:boolean = event[1];

        let blub = this.result.mods.find(attr => attr[0] == attribute.attribute);

        if(checked){
            // If checked -> Add
            if(blub == null){
                // attribute ist noch nicht vorhanden, also pushen
                this.result.mods.push([attribute.attribute, attributeValue]);
            } else {
                // attribut ist vorhanden, also nur value aendern
                blub[1] = attributeValue;
            }

        } else {
            if(blub == null){
                // attribute ist noch nicht vorhanden, also kann es auch nicht geloescht werden
                // sollte nicht vorkommen.
            } else {
                // attribut ist vorhanden, also loeschen
                let idx = this.result.mods.indexOf(blub);
                this.result.mods.splice(idx, 1);
            }
        }

    }
}
