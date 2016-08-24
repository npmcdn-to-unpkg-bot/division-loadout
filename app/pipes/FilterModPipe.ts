/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";


@Pipe({name: 'filterMod'})
export class FilterModPipe implements PipeTransform {
    transform(mods, modId:string) : any {
        if(mods == null){
            return null;
        }
        return mods.filter(mod => mod.modId === modId);
    }
}