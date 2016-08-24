import {Blueprint} from "../model/blueprint";
import {AttributeConsts, SkillConsts, TalentConsts} from "../model/DivisionTypes";

/**
 * Created by Alex on 17.04.2016.
 */
export var GEARSCORE_204: Blueprint[] = [
    {
        "id": "stamina_gloves_204",
        "name": "Stamina Gloves",
        "slot": "gloves",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            {"attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 370, "max": 453 } },
            
            {"attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 494, "max": 604 } },
            {"attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 494, "max": 604 } },
            {"attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },
            // TODO { "attribute": ["firearms", "stamina", "electronics"], "min": 494, "max": 604, "step": 1 },

            {"attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },
            {"attributeType": "major", "attribute": AttributeConsts.ELITE_DMG, "datatype": { "type":"number", "min": 10, "max": 12 } },
            {"attributeType": "major", "attribute": AttributeConsts.CHC, "datatype": { "type":"number", "min": 4, "max": 5 } },
            {"attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL, "datatype": { "type":"number", "min": 10, "max": 12 } },
            {"attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "datatype": { "type":"number", "min": 12, "max": 14.50, "step": 0.5 } },
            {"attributeType": "major", "attribute": AttributeConsts.HEALTH, "datatype": { "type":"number", "min": 1858, "max": 2272 } },
            {"attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "datatype": { "type":"number", "min": 3716, "max": 4545 } },

            {"attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG, "datatype": { "type":"number", "min": 6, "max": 7 } },
            {"attributeType": "minor", "attribute": AttributeConsts.SCAVAGING, "datatype": { "type":"number", "min": 20, "max": 24 } },
            {"attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "datatype": { "type":"number", "min": 10, "max": 12 } },
            {"attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
            {"attributeType": "minor", "attribute": AttributeConsts.BLIND_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
            {"attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },

            { "attributeType": "gear_talent", "attribute": "savage" },
            { "attributeType": "gear_talent", "attribute": "reckless" },
            { "attributeType": "gear_talent", "attribute": "cunning" },
            { "attributeType": "gear_talent", "attribute": "decisive" },
            { "attributeType": "gear_talent", "attribute": "astute" }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "primary": 1, "major":3, "minor":0, "skill":1, "gear_talent": 1 }
        }
    }
];