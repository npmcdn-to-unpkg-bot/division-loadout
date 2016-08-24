/**
 * Created by Alex on 16.05.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {DivisionItem} from "../model/DivisionItem";
import {AttributeConsts} from "../model/DivisionTypes";


@Pipe({name: 'blueprint'})
export class BlueprintFilterPipe implements PipeTransform {
    transform(item:DivisionItem) : { modId:string }[] {
        if(item == null || item.attributes == null){
            return null;
        }

        // TODO

        return null;
    }
}