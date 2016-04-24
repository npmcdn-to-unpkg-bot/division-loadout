import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var SENTRY_ARMORS: Blueprint[] = [
    {
        "id": "armor_sentry_191",
        "name": "Sentry's Call Armor",
        "slot": "body",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 662, "max": 811, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 441, "max": 540, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,         "min": 7,       "max": 9,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,             "min": 441,     "max": 540,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,            "min": 2205,    "max": 2701,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,    "min": 9,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,    "min": 11.50,   "max": 14,      "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,        "min": 9,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,      "min": 19, "max": 24, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 39, "max": 48, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":3, "minor":1, "skill":1 }
        }]
    },
    {
        "id": "armor_sentry_214",
        "name": "Sentry's Call Armor",
        "slot": "body",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 662, "max": 811, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,         "min": 7,       "max": 9,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,             "min": 494,     "max": 604,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,            "min": 2471,    "max": 3022,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,    "min": 10,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,    "min": 12,   "max": 14.5,      "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,        "min": 10,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,      "min": 20, "max": 24, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 40, "max": 49, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":3, "minor":1, "skill":1 }
        }]
    },{
        "id": "armor_sentry_240",
        "name": "Sentry's Call Armor",
        "slot": "body",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 830, "max": 1018, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 553, "max": 678, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,         "min": 7,       "max": 9,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,             "min": 553,     "max": 678,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH,            "min": 2765,    "max": 3390,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,    "min": 10,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,    "min": 12,   "max": 15,      "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT,        "min": 10,       "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD,            "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP,      "min": 20, "max": 25, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 41, "max": 50, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3,   "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 }
        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":3, "minor":1, "skill":1 }
        }]
    }
];