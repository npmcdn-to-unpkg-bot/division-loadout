/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {DivisionItem} from "../model/DivisionItem";


@Pipe({name: 'itemModById'})
export class FilterModPipe implements PipeTransform {
    transform(item: DivisionItem, modId:string) : {} {
        if(item == null || item.mods == null){
            return null;
        }

        return item.mods.find(mod => mod.modId == modId)
    }
}