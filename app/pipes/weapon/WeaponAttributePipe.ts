/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../../model/AttributeDescriptor";
import {DivisionItem} from "../../model/DivisionItem";
import {AttributeConsts} from "../../model/DivisionTypes";


@Pipe({name: 'weaponAttributes'})
export class WeaponAttributePipe implements PipeTransform {
    transform(item:DivisionItem, attributeType:string) : AttributeDescriptor[] {
        // returns all attributes with a specific attributeType from an item.
        if(item == null || item.attributes == null){
            return [];
        }


        let valid = [
            AttributeConsts.WEAPON_BASE_DMG, 
            AttributeConsts.HEADSHOT_DMG, 
            AttributeConsts.CHC
        ];
        
        return item.attributes.filter( attribute => valid.indexOf(attribute.attribute) >= 0);
    }
}