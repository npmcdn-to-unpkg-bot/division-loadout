/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";

/*
 * Filters the incoming stream on the attributeType.
 * 
 */
@Pipe({name: 'attributeType'})
export class AttributeTypePipe implements PipeTransform {
    transform(attributes:AttributeDescriptor[], attributeType:string) : AttributeDescriptor[] {
        if(attributes == null){
            return [];
        }

        // attributeType -> native, major, minor ...
        return attributes.filter(attribute => attribute.attributeType === attributeType);
    }
}