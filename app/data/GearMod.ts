import {Blueprint} from "../model/blueprint";
import {AttributeConsts} from "../model/DivisionTypes";
/**
 * Created by Alex on 23.04.2016.
 */
export var GEAR_MODS: Blueprint[] = [
    {
        "id": "gear_mod_204",
        "name": "Generic Gear Mod",
        "slot": "gear_mod",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 90, "max": 161 } },
            { "attributeType": "major", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 90, "max": 161 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 90, "max": 161 } },


            { "attributeType": "major", "attribute": AttributeConsts.CHC, "datatype": { "type":"number", "min": 1.5, "max": 1.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 131, "max": 161 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH, "datatype": { "type":"number", "min": 658, "max": 807 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "datatype": { "type":"number", "min": 3, "max": 3.5, "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE, "datatype": { "type":"number", "min": 2, "max": 3 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "datatype": { "type":"number", "min": 1176, "max": 1439 } },
            { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN, "datatype": { "type":"number", "min": 2, "max": 3 } }

            // TODO die skill bonis fehlen noch hier
        ],
        "validation": {
            "mode": "fixed",
            "input": { "major":2 }
        }
    }
];