/**
 * Created by Alex on 17.04.2016.
 */
import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'attrType'})
export class AttributeTypePipe implements PipeTransform {
    transform(value:number, [attributeType]) : number {
        // attributeType -> native, major, minor ...
        
        return 5;
    }
}