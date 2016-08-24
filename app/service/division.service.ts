/**
 * Created by Alex on 03.04.2016.
 */
import {Injectable} from '@angular/core';
import {Blueprint} from "../model/blueprint";
import {DivisionAttributeMeta} from "../model/division.attribute";
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {SET_BONUS} from "../data/Sets";
import {GEARSCORE_204} from "../data/Other";
import {ATTRIBUTES, TALENTS, SETS} from "../data/Attributes";
import {ItemSlotType, AttributeId} from "../model/DivisionTypes";
import {WEAPONS_204} from "../data/Weapons204";
import {GEAR_MODS} from "../data/GearMod";
import {WEAPON_MODS} from "../data/WeaponMods";
import {GENERIC_SET_ARMOR_191, GENERIC_SET_ARMOR_214, GENERIC_SET_ARMOR_240} from "../data/items/GenericSetArmor";
import {
    GENERIC_SET_BACKPACK_191, GENERIC_SET_BACKPACK_240,
    GENERIC_SET_BACKPACK_214
} from "../data/items/GenericSetBackpack";
import {GENERIC_SET_GLOVES_191, GENERIC_SET_GLOVES_214, GENERIC_SET_GLOVES_240} from "../data/items/GenericSetGloves";
import {
    GENERIC_SET_HOLSTER_191, GENERIC_SET_HOLSTER_214,
    GENERIC_SET_HOLSTER_240
} from "../data/items/GenericSetHolster";
import {
    GENERIC_SET_KNEEPADS_191, GENERIC_SET_KNEEPADS_214,
    GENERIC_SET_KNEEPADS_240
} from "../data/items/GenericSetKneepads";
import {GENERIC_SET_MASK_240, GENERIC_SET_MASK_214, GENERIC_SET_MASK_191} from "../data/items/GenericSetMask";

@Injectable()
export class DivisionService {
    constructor(){
        //this.generateSets();

        this.sets.push(...[
            GENERIC_SET_ARMOR_191, GENERIC_SET_ARMOR_214, GENERIC_SET_ARMOR_240,
            GENERIC_SET_BACKPACK_191,GENERIC_SET_BACKPACK_214,GENERIC_SET_BACKPACK_240,
            GENERIC_SET_GLOVES_191,GENERIC_SET_GLOVES_214,GENERIC_SET_GLOVES_240,
            GENERIC_SET_HOLSTER_191,GENERIC_SET_HOLSTER_214,GENERIC_SET_HOLSTER_240,
            GENERIC_SET_KNEEPADS_191,GENERIC_SET_KNEEPADS_214,GENERIC_SET_KNEEPADS_240,
            GENERIC_SET_MASK_191,GENERIC_SET_MASK_214,GENERIC_SET_MASK_240
        ])
    }

    sets: Blueprint[] = [];

    generateSets() : void {
        let tempSetNames = ['nomad', 'tactician', 'striker', 'sentry']

        let tempGenericItems = [
            GENERIC_SET_ARMOR_191, GENERIC_SET_ARMOR_214, GENERIC_SET_ARMOR_240,
            GENERIC_SET_BACKPACK_191,GENERIC_SET_BACKPACK_214,GENERIC_SET_BACKPACK_240,
            GENERIC_SET_GLOVES_191,GENERIC_SET_GLOVES_214,GENERIC_SET_GLOVES_240,
            GENERIC_SET_HOLSTER_191,GENERIC_SET_HOLSTER_214,GENERIC_SET_HOLSTER_240,
            GENERIC_SET_KNEEPADS_191,GENERIC_SET_KNEEPADS_214,GENERIC_SET_KNEEPADS_240,
            GENERIC_SET_MASK_191,GENERIC_SET_MASK_214,GENERIC_SET_MASK_240
        ];

        tempSetNames.forEach(setName => {
            tempGenericItems.forEach(genericItem => {
                let item = Object.assign({}, genericItem);

                switch(setName){
                    case "nomad":
                        item.name = item.slot + " " + setName;
                        break;
                    case "tactician":
                        item.name = "Tactician's " + item.slot;
                        break;
                    case "striker":
                        item.name = "Striker's " + item.slot;
                        break;
                    case "sentry":
                        item.name = "Sentry's Call " + item.slot;
                        break;
                }

                item.id = item.slot + "_" + setName + "_" + item.gearscore;
                item.possibleAttributes.push({ "attributeType": "set", "attribute": setName, value: true });
                this.sets.push(item);
            });
        });


    }

    getBlueprints() : Blueprint[] {
        let result: Blueprint[] = [];

        result.push(...this.sets);

        result.push(...GEAR_MODS);
        result.push(...WEAPON_MODS);
        
        result.push(...WEAPONS_204);

        result.push(...GEARSCORE_204); // ????



        return result;
    }

    getBlueprintById(id: string) : Blueprint {
        return this.getBlueprints().filter((bp) => bp.id == id)[0];
    }
    
    getBlueprintsBySlot(slot: ItemSlotType) : Blueprint[] {
        return this.getBlueprints().filter((bp) => bp.slot == slot);
    }

    getBlueprintsForWeaponMods(slotTypes: AttributeId[]) : Blueprint[] {
        // TODO
        return this.getBlueprints().filter((bp) => bp.slot == 'weapon_slot_magazine');
    }


    getAttributeMetaData(attrId:string): DivisionAttributeMeta {
        let result = this.getPossibleAttributes().filter((attr) => attr.attributeId == attrId)[0];
        return result;
    }

    getPossibleAttributes():DivisionAttributeMeta[] {
        let result: DivisionAttributeMeta[] = [];
        result.push(...ATTRIBUTES);
        result.push(...TALENTS);
        result.push(...SETS);
        return result;
    }
    
    getPossibleSets(){
        let result = [];
        result.push(...SET_BONUS);
        return result;
    }
}