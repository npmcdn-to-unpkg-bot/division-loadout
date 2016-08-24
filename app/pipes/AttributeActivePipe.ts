/**
 * Created by Alex on 10.05.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {AttributeDescriptor} from "../model/AttributeDescriptor";
/*
 * Filters the incoming stream on the value. So 'true' as a parameter will return 
 * all attributes which are active and so have an actual value, the attributes 
 * which are just possible but not selected will be left out. 
 * On 'false' it will return only the attributes which are not active.
 * Defaults to 'true'.
 */
@Pipe({name: 'attributeActive'})
export class AttributeActivePipe implements PipeTransform {
    transform(attributes:AttributeDescriptor[], attributeActive:boolean) : AttributeDescriptor[] {
        // TODO merge this pipe with AttributeTypePipe??
        if(attributeActive !== null && !attributeActive){
            return attributes.filter(attribute => attribute.value  === null);
        } else {
            return attributes.filter(attribute => attribute.value  !== null);
        }
    }
}

