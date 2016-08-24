/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {DivisionItem} from "../model/DivisionItem";

/*
 * Filters the incoming stream on the attributeType.
 * 
 */
@Pipe({name: 'itemAttributeType'})
export class ItemAttributeTypePipe implements PipeTransform {
    transform(item:DivisionItem, attributeType:string) : AttributeDescriptor[] {
        // returns all attributes with a specific attributeType from an item.
        if(item == null || item.attributes == null){
            return [];
        }

        // attributeType -> native, major, minor ...
        return item.attributes.filter(attribute => attribute.attributeType === attributeType);
    }
}