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
@Pipe({name: 'itemValidation'})
export class ItemValidationPipe implements PipeTransform {
    transform(item:DivisionItem, op:string, attributeType:string) : number {
        // op -> max/min
        // example: [max]="item | itemValidation:'max':'set'"
        if(item == null || item.blueprint == null || item.blueprint.validation == null){
            return null;
        }
        
        //?.blueprint?.validation?.input?.set
        let validationContext = item.blueprint.validation;
        
        if(validationContext.mode == 'fixed'){
            return validationContext.input[attributeType];
        }
        
        return null;
    }
}