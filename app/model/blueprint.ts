import {DivisionAttribute} from "./division.attribute";
import {DivisionTalent} from "./division.talent";
import {PossibleDivisionAttribute} from "./PossibleDivisionAttribute";
import {ItemSet, ItemQuality, ItemSlotType} from "./DivisionTypes";

/**
 * Created by Alex on 03.04.2016.
 */
export interface Blueprint {
    id: string
    name: string
    slot: ItemSlotType
    meta?: any
    ilvl?: number
    quality?: ItemQuality
    gearscore?: number
    itemSet?: ItemSet
    possibleAttributes?: PossibleDivisionAttribute[]
    possibleTalents?: DivisionTalent[]
    validation?: any[]
}


/*
 "type":"blueprint",
 "blueprintId":"churchMp5"
 "slot":"mask",
 "native": [{"attributeId":"armor", "min":"350", "max":"475", "step":"1" }],
 "possibleMajors":[{"attributeId":"chd", "min":"6", "max":"7", "step":"0.1" }],
 "possibleMinors":[{}],
 "possibleSkills":[{}],
 "possibleTalents":[{}],
 "constraints": [
 {"what": "majors", "op":"<=", "amount":"1"},
 {"what": "skills", "op":"=", "amount":"1"}
 ]*/