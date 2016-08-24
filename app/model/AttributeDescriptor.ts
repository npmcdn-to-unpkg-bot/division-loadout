import {AttributeId, AttributeType} from "./DivisionTypes";
/**
 * Created by Alex on 03.04.2016.
 */

// TODO umstellen auf class damit ich tyüe guards benutzen kann?
export interface BooleanType {
    // boolean default should be TRUE? 
    type: "boolean"
}

export interface NumberType {
    type: "number"
    min?: number
    max?: number
    step?: number // Only when valueType = number. default = 1 
    // default: currently a attribute is instanced to its "max" value when activated (in the reducer).
    // maybe introduce a "default" here, or in AttributeDescriptor directly, so this can be changed
}

export interface AttributeDescriptor {
    attributeType: AttributeType // major, minor, native, skills usw ...
    attribute: AttributeId // cdc, chd ... TODO rename to attributeId    
    value?: boolean | number 
    datatype?: BooleanType | NumberType 
    // If datatype == null, app should treat this as a boolean 
    // (Because numberTypes net more info like min/max so we cannot save the datatype-object there)
    // but for booleans we can most of the time
}