import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var GENERIC_SET_HOLSTER_191: Blueprint = {
        "id": "gear_set_holster_191",
        "name": "Gear Set Holster",
        "slot": "holster",
        "gearscore": 191,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 330, "max": 405 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 441, "max": 540 } },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,     "datatype": { "type":"number", "min": 220,       "max": 270 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,             "datatype": { "type":"number", "min": 330,    "max": 405 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "datatype": { "type":"number", "min": 4,    "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "datatype": { "type":"number", "min": 7,      "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1 }
        }
    };
export var GENERIC_SET_HOLSTER_214: Blueprint = {
        "id": "gear_set_holster_214",
        "name": "Gear Set Holster",
        "slot": "holster",
        "gearscore": 214,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 370, "max": 453 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,             "datatype": { "type":"number", "min": 247,       "max": 302 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,     "datatype": { "type":"number", "min": 370,    "max": 453 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "datatype": { "type":"number", "min": 5,    "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "datatype": { "type":"number", "min": 7,      "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1 }
        }
    };
export var GENERIC_SET_HOLSTER_240: Blueprint = {
        "id": "gear_set_holster_240",
        "name": "Gear Set Holster",
        "slot": "holster",
        "gearscore": 240,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 414, "max": 508 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 553, "max": 678 } },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,             "datatype": { "type":"number", "min": 276,       "max": 339 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,     "datatype": { "type":"number", "min": 414,    "max": 508 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "datatype": { "type":"number", "min": 5,    "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "datatype": { "type":"number", "min": 7,      "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1 }
        }
    };
