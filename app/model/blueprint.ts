import {DivisionAttributeMeta} from "./division.attribute";
import {AttributeDescriptor} from "./AttributeDescriptor";
import {ItemSet, ItemQuality, ItemSlotType} from "./DivisionTypes";

/**
 * Created by Alex on 03.04.2016.
 */
export interface Blueprint {
    id: string
    name: string
    slot: ItemSlotType    
    ilvl?: number
    quality?: ItemQuality
    gearscore?: number
    possibleAttributes?: AttributeDescriptor[] // TODO rename to attributes
    //possibleTalents?: DivisionTalent[] // TODO remove here. Replace with entry in possibleAttributes as AttributeDescriptor. 
    // { attributeType:"gear_talent" attribute:"brutal" value:false } .. value:true for active ones
    validation?: { mode: "fixed" | "holster", input: {}} // input -> { major: 2, minor:1}  
}