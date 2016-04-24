import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var SENTRY_KNEEPADS: Blueprint[] = [
    {
        "id": "kneepads_sentry_191",
        "name": "Sentrys Call Kneepads",
        "slot": "kneepads",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 551, "max": 675, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 441, "max": 540, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 15,       "max": 19,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 4,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "min": 220,      "max": 270,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1102,    "max": 1350,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 8.5,      "max": 10.5,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "min": 4,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 8, "max": 10, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "min": 23, "max": 28, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 23, "max": 28, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 23, "max": 28, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 23, "max": 28, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "min": 23, "max": 28, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "min": 88, "max": 108, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 79, "max": 97, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 39, "max": 48, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "min": 7.5, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major": 2, "minor": 3, "skill": 1 }
        }]
    },
    {
        "id": "kneepads_sentry_214",
        "name": "Sentrys Call Kneepads",
        "slot": "kneepads",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 617, "max": 755, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 16,       "max": 19,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 5,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "min": 247,      "max": 302,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1235,    "max": 1511,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 9,      "max": 11,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "min": 5,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 8, "max": 10, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "min": 98, "max": 120, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 81, "max": 99, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 40, "max": 49, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major": 2, "minor": 3, "skill": 1 }
        }]
    },
    {
        "id": "kneepads_sentry_240",
        "name": "Sentrys Call Kneepads",
        "slot": "kneepads",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 691, "max": 847, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 553, "max": 678, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 16,       "max": 20,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 5,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,       "min": 276,      "max": 339,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1382,    "max": 1695,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 9,      "max": 11,   "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,  "min": 5,      "max": 6,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG,     "min": 8, "max": 10, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SHOCK_RES,      "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,      "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES,     "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,     "min": 23, "max": 29, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,     "min": 110, "max": 135, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING,     "min": 83, "max": 102, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,       "min": 41, "max": 50, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,   "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major": 2, "minor": 3, "skill": 1 }
        }]
    }
];