/**
 * Created by Alex on 03.04.2016.
 */
export interface DivisionItem {
    blueprintId?: string
    // TODO tupel vermeiden weil verarbeitung "komplizierter" als normales array? immerhin ist es jeweils eher eine hashmap
    majors?: [string, number][]
    minors?: [string, number][]
    skills?: [string, number][]
    natives?: [string, number][]
    mods?: [string, number][]
}


/*

 {
 "type":"item",
 "blueprintId":"churchMask1"
 "slot":"mask",
 "native": [{"attributeId":"armor", "value":"470" }],
 "majors":[{"attributeId":"chd", "value": "7"}],
 "minors":[{}],
 "skills":[{}],
 }

 */