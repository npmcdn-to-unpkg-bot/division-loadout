import {AttributeId, AttributeType} from "./DivisionTypes";
/**
 * Created by Alex on 03.04.2016.
 */
export interface PossibleDivisionAttribute {
    attributeType: AttributeType // major, minor, native, skills usw ...
    attribute: AttributeId // cdc, chd ...
    min: number
    max: number
    step: number
    
}