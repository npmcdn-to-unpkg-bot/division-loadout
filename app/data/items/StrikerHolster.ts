import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var STRIKER_HOLSTERS: Blueprint[] = [
    {
        "id": "holster_striker_191",
        "name": "Strikers Holster",
        "slot": "holster",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 330, "max": 405, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 441, "max": 540, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,     "min": 220,       "max": 270,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,             "min": 330,    "max": 405,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "min": 4,    "max": 6,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 7,      "max": 9,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 7.5, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "holster",
            "input": { }
        }]
    },
    {
        "id": "holster_striker_214",
        "name": "Strikers Holster",
        "slot": "holster",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 370, "max": 453, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,             "min": 247,       "max": 302,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,     "min": 370,    "max": 453,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "min": 5,    "max": 6,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 7,      "max": 9,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "holster",
            "input": { }
        }]
    },
    {
        "id": "holster_striker_240",
        "name": "Strikers Holster",
        "slot": "holster",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 414, "max": 508, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 553, "max": 678, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,             "min": 276,       "max": 339,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,     "min": 414,    "max": 508,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,          "min": 5,    "max": 6,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 7,      "max": 9,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,          "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "holster",
            "input": { }
        }]
    }
];