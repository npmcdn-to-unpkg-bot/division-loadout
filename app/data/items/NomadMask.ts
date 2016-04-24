import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var NOMAD_MASKS: Blueprint[] = [
    {
        "id": "mask_nomad_191",
        "name": "Mask of the Nomad",
        "slot": "mask",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "nomad",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 330, "max": 405, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,      "min": 1,   "max": 1,   "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 4,       "max": 5,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 9,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1657,    "max": 2030,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 9,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 11.50,     "max": 14,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "min": 3315,    "max": 4061,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 6, "max": 7, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 19, "max": 24, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 9, "max": 12, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "min": 7.5, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":1 }
        }]
    },{
        "id": "mask_nomad_214",
        "name": "Mask of the Nomad",
        "slot": "mask",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "nomad",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 370, "max": 453, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,    "min": 1,   "max": 1,   "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 4,     "max": 5,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 10,     "max": 12,   "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1858,  "max": 2272, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 10,     "max": 12,   "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 12,    "max": 14.5,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "min": 3716,  "max": 4545, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,        "min": 1,     "max": 1,    "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 6,  "max": 7,  "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 20, "max": 24, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 10,  "max": 12, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":1 }
        }]
    },{
        "id": "mask_nomad_240",
        "name": "Mask of the Nomad",
        "slot": "mask",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "nomad",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 414, "max": 508, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,    "min": 1,   "max": 1,   "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 4,     "max": 5,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 10,     "max": 12,   "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 2079,  "max": 2549, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 10,     "max": 12,   "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 12,    "max": 15,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "min": 4158,  "max": 5098, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,        "min": 1,     "max": 1,    "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 6,  "max": 7,  "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 20, "max": 25, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 10,  "max": 12, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":1 }
        }]
    }
];