import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var SENTRY_BACKPACKS: Blueprint[] = [
    {
        "id": "backpack_sentry_191",
        "name": "Sentrys Call Backpack",
        "slot": "backpack",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,        "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,      "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS,  "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "min": 20,  "max": 24,  "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,     "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,       "min": 15,      "max": 19,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,        "min": 330,     "max": 405,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 9,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,       "min": 4410,    "max": 5402,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN,    "min": 9,      "max": 12,      "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,  "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,    "min": 44, "max": 54, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 39, "max": 48, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,         "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,  "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 7.5, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":2 }
        }]
    },
    {
        "id": "backpack_sentry_214",
        "name": "Sentrys Call Backpack",
        "slot": "backpack",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,        "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,      "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS,  "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "min": 20,  "max": 24,  "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,     "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,       "min": 16,      "max": 19,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,        "min": 370,     "max": 453,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 10,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,       "min": 4942,    "max": 6045,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN,    "min": 10,      "max": 12,      "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,  "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,    "min": 49, "max": 60, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 40, "max": 49, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,  "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 8, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":2 }
        }]
    },
    {
        "id": "backpack_sentry_240",
        "name": "Sentrys Call Backpack",
        "slot": "backpack",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "sentry",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,        "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,      "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS,  "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "min": 20,  "max": 24,  "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD,     "min": 1,       "max": 1,       "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHD,       "min": 16,      "max": 20,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR,        "min": 414,     "max": 508,     "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE,       "min": 10,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,       "min": 5530,    "max": 6780,    "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN,    "min": 10,      "max": 12,      "step": 1 },

            { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES,     "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES,  "min": 11, "max": 14, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES,    "min": 55, "max": 67, "step": 1 },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP,     "min": 41, "max": 50, "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES,     "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION,         "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,  "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION,   "min": 8, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major":1, "minor":1, "skill":2 }
        }]
    }
];