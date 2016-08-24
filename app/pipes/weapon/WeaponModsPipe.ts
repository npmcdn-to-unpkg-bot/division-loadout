/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {DivisionItem} from "../../model/DivisionItem";
import {AttributeConsts} from "../../model/DivisionTypes";
import {AttributeId} from "../../model/DivisionTypes";

@Pipe({name: 'weaponMods'})
export class WeaponModsPipe implements PipeTransform {
    transform(item:DivisionItem) : { name:string, slotTypes: AttributeId[] }[] {
        if(item == null || item.attributes == null){
            return null;
        }
        
        // TODO diese pipe muss das item analysieren und die möglichen mods pro slot angeben

        let weaponModDescriptors : { name: string ,slotTypes: AttributeId[] }[] = [];


        let possibleMag = [
            AttributeConsts.WEAPON_SLOT_MAGAZINE
        ];
        let filteredMag = item.attributes.filter(attr => possibleMag.indexOf(attr.attribute) >= 0);
        if(filteredMag.length > 0){
            weaponModDescriptors.push({ name: "MAGAZIN",  slotTypes: [...filteredMag.map(attr => attr.attribute)]});
        }

        let possibleMuzzle = [
            AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL,
            AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE
        ];
        let filteredMuzzle = item.attributes.filter(attr => possibleMuzzle.indexOf(attr.attribute) >= 0);
        if(filteredMuzzle.length > 0){
            weaponModDescriptors.push({ name: "MUZZLE",  slotTypes: [...filteredMuzzle.map(attr => attr.attribute)]});
        }



        let possibleOptic = [
            AttributeConsts.WEAPON_SLOT_OPTIC_SHORT,
            AttributeConsts.WEAPON_SLOT_OPTIC_LONG
        ];
        let filteredOptic = item.attributes.filter(attr => possibleOptic.indexOf(attr.attribute) >= 0);
        if(filteredOptic.length > 0){
            weaponModDescriptors.push({ name: "OPTIC",  slotTypes: [...filteredOptic.map(attr => attr.attribute)]});
        }


        let possibleBarrel = [
            AttributeConsts.WEAPON_SLOT_BARREL_SHORT,
            AttributeConsts.WEAPON_SLOT_BARREL_LONG
        ];
        let filteredBarrel = item.attributes.filter(attr => possibleBarrel.indexOf(attr.attribute) >= 0);
        if(filteredBarrel.length > 0){
            weaponModDescriptors.push({ name: "BARREL",  slotTypes: [...filteredBarrel.map(attr => attr.attribute)]});
        }

       /*
       AttributeConsts.WEAPON_SLOT_BARREL_SHORT
      AttributeConsts.WEAPON_SLOT_BARREL_LONG
       AttributeConsts.WEAPON_SLOT_MAGAZINE
        AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL
       AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE
       AttributeConsts.WEAPON_SLOT_OPTIC_SHORT
       AttributeConsts.WEAPON_SLOT_OPTIC_LONG
       */

        return weaponModDescriptors;
    }
}
/*
getPossibleWeaponMods() : { name: string, slotTypes: AttributeId[] }[] {
    if(this.item == null){
        return [];
    }
    // Jede Waffe hat Potential die gleichen Modplaetze, allerdings besitzen einige keine Moeglichkeit in ihrem BP einige Slots zu füllen.
    // Bedeutet: Diese hier gelieferten Werte sind grundsätzlich für alle Waffen gleich.
    // ABER: Wenn die Waffe keine Möglichkeit für einen Slot hat wird dieser Mod nicht geliefert durch diese Methode.

    // returns [MOD_TYPE, ??]

    // all possible weapon_slot types. Will also include small/large pendants for same slot.
    let slots = this.Blueprint.possibleAttributes.filter((bp) => bp.attribute.indexOf("weapon_slot") == 0);

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

     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_SHORT,      "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_LONG,      "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MAGAZINE,         "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL,      "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE,      "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_SHORT,      "min": 1,   "max": 1,   "step": 1 },
     { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_LONG,      "min": 1,   "max": 1,   "step": 1 },

    return result;
}*/