/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
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
import {WeaponAttributeComponent} from "../weapon-attribute/WeaponAttributeComponent";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";
import {WeaponModComponent} from "../weapon-mod/WeaponModComponent";

@Component({
    selector: 'weapon-item',
    directives:[WeaponModComponent, WeaponAttributeComponent, NativeBoxComponent, ItemQualityComponent, SelectBlueprint, TalentBoxComponent,
        ItemAttribute, PossibleItemAttribute],
    templateUrl: 'app/components/weapon-item/weapon-item.html'
})
export class WeaponItemComponent implements OnInit {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }
    
    @Input() itemSlotType: ItemSlotType;
    @Input() slotId: string;
    
    selectedBlueprint: Blueprint;

    editingMajors: boolean = false;
    editingMinors: boolean = false;
    editingNatives: boolean = false;
    editingSkills: boolean = false;
    
    result: DivisionItem = {
        "majors": [
            //["chd", 4]
        ],
        "minors": [

        ],
        "natives": [

        ],
        "skills": [

        ],
        "mods": [

        ]
    }

    ngOnInit() {

    }

    resetBlueprint(){
        this.selectedBlueprint = null;
    }

    saveResultAttribute(attribute: PossibleDivisionAttribute, event: [number, boolean]){
        let attributeValue:number = event[0];
        let checked:boolean = event[1];

        var targetArray = null;
        // attributeType -> major, minor, native, mod, skills
        switch(attribute.attributeType){
            case "major":
                targetArray = this.result.majors;
                break;
            case "minor":
                targetArray = this.result.minors;
                break;
            case "native":
                targetArray = this.result.natives;
                break;
            case "skill":
                targetArray = this.result.skills;
                break;
            case "mod":
                targetArray = this.result.mods;
                break;
        }

        let blub = targetArray.find(attr => attr[0] == attribute.attribute);

        if(checked){
            // If checked -> Add
            if(blub == null){
                // attribute ist noch nicht vorhanden, also pushen
                targetArray.push([attribute.attribute, attributeValue]);
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
                let idx = targetArray.indexOf(blub);
                targetArray.splice(idx, 1);
            }
        }

        this._logger.log(this.slotId);
        this.updateSharedService(this.slotId, this.result);
    }

    updateSharedService(from:string, result:DivisionItem): void{
        //this._sharedService.setResult(from, result);
    }

    getCurrentValueForAttribute(attribute:PossibleDivisionAttribute): number {
        var targetArray = null;

        switch(attribute.attributeType){
            case "major":
                targetArray = this.result.majors;
                break;
            case "minor":
                targetArray = this.result.minors;
                break;
            case "native":
                targetArray = this.result.natives;
                break;
            case "skill":
                targetArray = this.result.skills;
                break;
            case "mod":
                targetArray = this.result.mods;
                break;
        }

        let value = targetArray.find(attr => attr[0] == attribute.attribute);
        return value == null ? null : value[1];
    }

    getCurrentValue(attribute:string, attributeType:string): number {
        var targetArray = null;

        switch(attributeType){
            case "major":
                targetArray = this.result.majors;
                break;
            case "minor":
                targetArray = this.result.minors;
                break;
            case "native":
                targetArray = this.result.natives;
                break;
            case "skill":
                targetArray = this.result.skills;
                break;
            case "mod":
                targetArray = this.result.mods;
                break;
        }

        let value = targetArray.find(attr => attr[0] == attribute);
        return value == null ? null : value[1];
    }

    getPossibleWeaponMods() : { name: string ,slotTypes: AttributeId[] }[] {
        // Jede Waffe hat Potential die gleichen Modplaetze, allerdings besitzen einige keine Moeglichkeit in ihrem BP einige Slots zu füllen.
        // Bedeutet: Diese hier gelieferten Werte sind grundsätzlich für alle Waffen gleich.
        // ABER: Wenn die Waffe keine Möglichkeit für einen Slot hat wird dieser Mod nicht geliefert durch diese Methode.

        // returns [MOD_TYPE, ??]

        // all possible weapon_slot types. Will also include small/large pendants for same slot.
        let slots = this.selectedBlueprint.possibleAttributes.filter((bp) => bp.attribute.indexOf("weapon_slot") == 0);
        
        //let result : AttributeId[][] = [];
        
        let result : { name: string ,slotTypes: AttributeId[] }[] = [];
        
        // MAGAZIN
        result.push({ name: "MAGAZIN", slotTypes: [AttributeConsts.WEAPON_SLOT_MAGAZINE]});
        
        // MUZZLE
        result.push({ name: "MUZZLE", slotTypes: [AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL, AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE]});
        
        // OPTIC
        result.push({ name: "OPTIC", slotTypes: [AttributeConsts.WEAPON_SLOT_OPTIC_SHORT, AttributeConsts.WEAPON_SLOT_OPTIC_LONG]});
        
        // BARREL
        result.push({ name: "BARREL", slotTypes: [AttributeConsts.WEAPON_SLOT_BARREL_SHORT, AttributeConsts.WEAPON_SLOT_BARREL_LONG]});

       /* { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_SHORT,      "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_LONG,      "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MAGAZINE,         "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL,      "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE,      "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_SHORT,      "min": 1,   "max": 1,   "step": 1 },
        { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_LONG,      "min": 1,   "max": 1,   "step": 1 },*/

        return result;
    }

    getPossibleAttributes(attributeType: string): PossibleDivisionAttribute[] {
        return this.selectedBlueprint.possibleAttributes.filter(possAttr => possAttr.attributeType == attributeType);        
    }

    getPossibleWeaponAttributes() : PossibleDivisionAttribute[] {
        return this.selectedBlueprint.possibleAttributes.filter(
            possAttr => possAttr.attributeType == 'native' && [AttributeConsts.WEAPON_BASE_DMG, AttributeConsts.HEADSHOT_DMG, AttributeConsts.CHC].indexOf(possAttr.attribute) >= 0);
    }

    onBlueprintSelected(bp: Blueprint) : void {
        this.result.natives = [];
        this.result.majors = [];
        this.result.minors = [];

        this.selectedBlueprint = bp;

        // Annahme: Jedes NativeAttribut MUSS verwendet werden.
        // Daher werden hier alle NativeAttributes auf den jeweiligen max-Wert gesetzt.
        // Da aber nur ein Element aus [FIREARMS, STAMINA, ELECTRONICS] gesetzt werden darf
        // werden diese von dem automatischen Vorgang ausgenommen. (Ist unzulänglichkeit im Datenmodell??)
        for(var possible of this.getPossibleAttributes('native')){
            if([AttributeConsts.FIREARMS,AttributeConsts.STAMINA, AttributeConsts.ELECTRONICS].indexOf(possible.attribute) >= 0)
                continue;

            this.result.natives.push([possible.attribute, possible.max]);
        }
    }
}
