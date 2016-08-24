import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var GENERIC_SET_KNEEPADS_191: Blueprint = {
        "id": "gear_set_kneepads_191",
        "name": "Gear Set Kneepads",
        "slot": "kneepads",
        "gearscore": 191,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 551, "max": 675 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 441, "max": 540 } },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 15,       "max": 19 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 4,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 220,      "max": 270 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 1102,    "max": 1350 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 8.5,      "max": 10.5,   "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "datatype": { "type":"number", "min": 4,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 8, "max": 10 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "datatype": { "type":"number", "min": 23, "max": 28 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 23, "max": 28 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 23, "max": 28 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 23, "max": 28 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "datatype": { "type":"number", "min": 23, "max": 28 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "datatype": { "type":"number", "min": 88, "max": 108 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 79, "max": 97 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 39, "max": 48 } },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 2, "minor": 3, "skill": 1 }
        }
    };
export var GENERIC_SET_KNEEPADS_214: Blueprint = {
        "id": "gear_set_kneepads_214",
        "name": "Gear Set Kneepads",
        "slot": "kneepads",
        "gearscore": 214,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 617, "max": 755 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 16,       "max": 19 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 5,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 247,      "max": 302 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 1235,    "max": 1511 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 9,      "max": 11,   "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "datatype": { "type":"number", "min": 5,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 8, "max": 10 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "datatype": { "type":"number", "min": 98, "max": 120 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 81, "max": 99 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 40, "max": 49 } },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 2, "minor": 3, "skill": 1 }
        }
    };
export var GENERIC_SET_KNEEPADS_240: Blueprint = {
        "id": "gear_set_kneepads_240",
        "name": "Gear Set Kneepads",
        "slot": "kneepads",
        "gearscore": 240,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 691, "max": 847 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS,    "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA,     "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 553, "max": 678 } },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 16,       "max": 20 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 5,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "datatype": { "type":"number", "min": 276,      "max": 339 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "datatype": { "type":"number", "min": 1382,    "max": 1695 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "datatype": { "type":"number", "min": 9,      "max": 11,   "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "datatype": { "type":"number", "min": 5,      "max": 6 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1,          "datatype": { "type":"number", "min": 1,       "max": 1 } },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "datatype": { "type":"number", "min": 8, "max": 10 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "datatype": { "type":"number", "min": 23, "max": 29 } },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "datatype": { "type":"number", "min": 110, "max": 135 } },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "datatype": { "type":"number", "min": 83, "max": 102 } },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "datatype": { "type":"number", "min": 41, "max": 50 } },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 2, "minor": 3, "skill": 1 }
        }
    };
