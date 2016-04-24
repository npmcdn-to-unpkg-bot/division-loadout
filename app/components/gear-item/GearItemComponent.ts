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
import {GearModComponent} from "../gear-mod/GearModComponent";

//import {JSURL} from "jsurl";

@Component({
    selector: 'gear-item',
    directives:[GearModComponent, TalentBoxComponent, ItemAttribute, PossibleItemAttribute, NativeBoxComponent, ItemQualityComponent, SelectBlueprint],
    templateUrl: 'app/components/gear-item/gear-item.html'
})
export class GearItemComponent implements OnInit {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }
    
    @Input() itemSlotType: ItemSlotType;
    @Input() slotId: string;
    
    selectedBlueprint: Blueprint;
    selectedTalent: string;

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
        //this.result.blueprintId = "";

        let paramResult = this._sharedService.getResult(this.slotId);
        if(paramResult != null){
            this._logger.log(`Found data: ${JSON.stringify(paramResult)}`)
            this.result = this._sharedService.getResult(this.slotId);

            let blueprint: Blueprint[] = this._divisionService.getBlueprintsBySlot(this.itemSlotType).filter((bp) => bp.id == this.result.blueprintId);
            if(blueprint == null || blueprint.length != 1){
                this._logger.log(`Found too many blueprints: ${JSON.stringify(blueprint)}`)
                // TODO errorhandling wenn bp id nicht geufnden wird
            } else {
                this.selectedBlueprint = blueprint[0];
            }
        }
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
        this._sharedService.setResult(from, result);
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

    hasTalent() : boolean {

        return this.getPossibleAttributes('gear_talent').length > 0;
    }

    getPossibleAttributes(attributeType: string): PossibleDivisionAttribute[] {
        return this.selectedBlueprint.possibleAttributes.filter(possAttr => possAttr.attributeType == attributeType);
    }

    onTalentChanged(event){
        
    }

    getModRange() : Array<any> {
        // TODO wtf das muss besser gehen

        let result = [];

        let modSlots = this.getCurrentValue('slot', 'native') + this.getCurrentValue('slot', 'major');

        for(var i = 0 ; i < modSlots ; i++){
            result.push(i);
        }

        return result
    }

    onBlueprintSelected(bp: Blueprint) : void {
        this.result.natives = [];
        this.result.majors = [];
        this.result.minors = [];

        this.result.blueprintId = bp.id;

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

        /*let armor = this.result.natives.find(attr => attr[0] == "armor");

        if(armor == null){
            let possible = this.getPossibleAttributes('native').find(attr => attr.attribute == "armor");

            if(possible != null){
                this.result.natives.push([possible.attribute, possible.max]);
            }
        }*/
    }
}
