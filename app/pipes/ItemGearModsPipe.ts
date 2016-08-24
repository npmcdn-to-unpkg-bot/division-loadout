/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {DivisionItem} from "../model/DivisionItem";
import {AttributeConsts} from "../model/DivisionTypes";

/*
 * Filters the incoming stream on the attributeType.
 * 
 */
@Pipe({name: 'itemGearMods'})
export class ItemGearModsPipe implements PipeTransform {
    transform(item:DivisionItem) : { modId:string }[] {
        if(item == null || item.attributes == null){
            return null;
        }

        const gearModAttributes = [
            AttributeConsts.GEAR_MOD_1, 
            AttributeConsts.GEAR_MOD_2, 
            AttributeConsts.GEAR_MOD_3
        ];

        let idx = 0;
        
        let gearModDescriptors = item.attributes
            .filter(attr => attr.value != null)
            .filter(attr => {
                return gearModAttributes.indexOf(attr.attribute) >= 0;
            }).map(attr => {
                return { modId: "gear_mod_" + idx++ };
            });

        console.log("itemGearMods", gearModDescriptors);
        return gearModDescriptors;
    }
}