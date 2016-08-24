import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var GENERIC_SET_MASK_191: Blueprint = {
        "id": "gear_set_mask_191",
        "name": "Gear Set Mask",
        "slot": "mask",
        "gearscore": 191,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 330, "max": 405 } },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 441, "max": 540 } },
            
            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 4,       "max": 5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 9,      "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 1657,    "max": 2030 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 9,      "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 11.50,     "max": 14,   "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "datatype": { "type":"number", "min": 3315,    "max": 4061 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 6, "max": 7 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 19, "max": 24 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 9, "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":1 }
        }
    };
export var GENERIC_SET_MASK_214: Blueprint = {
        "id": "gear_set_mask_214",
        "name": "Gear Set Mask",
        "slot": "mask",
        "gearscore": 214,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 370, "max": 453 } },            
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },
            
            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 4,     "max": 5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 10,     "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 1858,  "max": 2272 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 10,     "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 12,    "max": 14.5,   "step": 0.5  } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "datatype": { "type":"number", "min": 3716,  "max": 4545 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 6,  "max": 7 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 20, "max": 24 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 10,  "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":1 }
        }
    };

export var GENERIC_SET_MASK_240: Blueprint = {
        "id": "gear_set_mask_240",
        "name": "Gear Set Mask",
        "slot": "mask",
        "gearscore": 240,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 414, "max": 508 } },            
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 553, "max": 678 } },
            
            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 4,     "max": 5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 10,     "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 2079,  "max": 2549 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 10,     "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 12,    "max": 15,   "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "datatype": { "type":"number", "min": 4158,  "max": 5098 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 6,  "max": 7 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 11, "max": 14 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 20, "max": 25 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 10,  "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,  "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,             "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,        "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,        "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,         "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,       "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":1 }
        }
    };
