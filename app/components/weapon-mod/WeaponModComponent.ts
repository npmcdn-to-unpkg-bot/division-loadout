/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ItemAttribute} from "../item-attribute/item.attribute";
import {PossibleItemAttribute} from "../possible-item-attribute/possible.item.attribute";
import {AttributeDescriptor} from "../../model/AttributeDescriptor";
import {DivisionService} from "../../service/division.service";
import {AttributeType, ItemSlotType, AttributeConsts, AttributeId} from "../../model/DivisionTypes";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";
import {Blueprint} from "../../model/blueprint";
import {htmlTemplate} from "./weapon-mod.html";

@Component({
    selector: 'weapon-mod',
    directives:[AttributesSelectorComponent, PossibleItemAttribute, ItemAttribute],
    pipes: [AttributeTypePipe],
    template: htmlTemplate
})
export class WeaponModComponent {
    constructor(private _divisionService: DivisionService) { }

    @Input() modId: string;
    @Input() editing: boolean;
    @Input() mod: { modId: string, blueprint:Blueprint, attributes: AttributeDescriptor[] };
    
    // TODO not used currently
    // INPUT: All possibilties for a given type. (Example: [WEAPON_SLOT_OPTIC_SHORT, WEAPON_SLOT_OPTIC_LONG])
    @Input() modTypes: AttributeId[];
    
    @Output() modRemoved = new EventEmitter();
    @Output() modInserted = new EventEmitter();
    @Output() modAttributeChanged = new EventEmitter();
    @Output() modAttributeRemoved = new EventEmitter();



    debugBpSelect(){

        let bpId = null;

        switch(this.modId){
            case "MAGAZIN":
                bpId = "weapon_mod_magazine_204";
                break;
            case "MUZZLE":
                bpId = "weapon_mod_muzzle_204";
                break;
            case "OPTIC":
                bpId = "weapon_mod_optic_204";
                break;
            case "BARREL":
                bpId = "weapon_mod_barrel_204";
                break;
            default:
                bpId = "weapon_mod_204";
        }

        // TODO dont hardcode this. instead make the user select a specific mod ...
        let bp = this._divisionService.getBlueprintById(bpId);
        this.modInserted.emit({ modId: this.modId, blueprint: bp});
    }

    removeMod(){
        this.modRemoved.emit({ modId: this.modId });
    }

    onAttributeChanged(event: AttributeDescriptor) {
        console.log("NodCmpt.onAttributeChanged");
        // TODO why the fuck is this method called, but no redux action is emitted, but in contrary the removeMod() method is?!?!?!?!?!?1
        // im JS code sieht man das hier keine Observer eingetragen sind für "action". Bei removeMod hingegen schon. WTF. Bug?
        this.modAttributeChanged.emit({ modId: this.modId, attribute: event });
    }

    onAttributeRemoved(event: AttributeDescriptor) {
        this.modAttributeRemoved.emit({ modId: this.modId, attribute: event });
    }
}