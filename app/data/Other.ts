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
        "itemSet": "none",
        "possibleAttributes": [
            {"attributeType": "native", "attribute": AttributeConsts.ARMOR, "min": 370, "max": 453, "step": 1},
            {"attributeType": "native", "attribute": AttributeConsts.FIREARMS, "min": 494, "max": 604, "step": 1},
            {"attributeType": "native", "attribute": AttributeConsts.STAMINA, "min": 494, "max": 604, "step": 1},
            {"attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1},
            // TODO { "attribute": ["firearms", "stamina", "electronics"], "min": 494, "max": 604, "step": 1 },

            {"attributeType": "major", "attribute": AttributeConsts.GEAR_MOD, "min": 1, "max": 1, "step": 1},
            {"attributeType": "major", "attribute": AttributeConsts.ELITE_DMG, "min": 10, "max": 12, "step": 1},
            {"attributeType": "major", "attribute": AttributeConsts.CHC, "min": 4, "max": 5, "step": 1},
            {"attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL, "min": 10, "max": 12, "step": 1},
            {"attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "min": 12, "max": 14.50, "step": 0.5},
            {"attributeType": "major", "attribute": AttributeConsts.HEALTH, "min": 1858, "max": 2272, "step": 1},
            {"attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "min": 3716, "max": 4545, "step": 1},

            {"attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG, "min": 6, "max": 7, "step": 1},
            {"attributeType": "minor", "attribute": AttributeConsts.SCAVAGING, "min": 20, "max": 24, "step": 1},
            {"attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "min": 10, "max": 12, "step": 1},
            {"attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "min": 11, "max": 14, "step": 1},
            {"attributeType": "minor", "attribute": AttributeConsts.BLIND_RES, "min": 11, "max": 14, "step": 1},
            {"attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 11, "max": 14, "step": 1},

            { "attributeType": "gear_talent", "attribute": "savage",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "gear_talent", "attribute": "reckless",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "gear_talent", "attribute": "cunning",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "gear_talent", "attribute": "decisive",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "gear_talent", "attribute": "astute",      "min": 1,   "max": 1,   "step": 1 }
        ]
    }
];