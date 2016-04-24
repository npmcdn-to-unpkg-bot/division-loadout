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
import {AttributeType, ItemSlotType, AttributeConsts, AttributeId} from "../../model/DivisionTypes";
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";
import {SelectBlueprint} from "../select-blueprint/SelectBlueprint";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";

@Component({
    selector: 'weapon-mod',
    directives:[PossibleItemAttribute, ItemAttribute],
    templateUrl: 'app/components/weapon-mod/weapon-mod.html'
})
export class WeaponModComponent {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }

    @Input() possibleWeaponmodTypes: { name: string, slotTypes: AttributeId[] };

    // INPUT: ModType? (Example: OPTIC)
    // INPUT: All possibilties for a given type. (Example: [WEAPON_SLOT_OPTIC_SHORT, WEAPON_SLOT_OPTIC_LONG])
    
    editing: boolean;

    getPossibleAttributes(): PossibleDivisionAttribute[] {
        return this._divisionService.getBlueprintsBySlot('').possibleAttributes.filter(possAttr => possAttr.attributeType == attributeType);
    }
}
