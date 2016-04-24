import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var STRIKER_GLOVES: Blueprint[] = [
    {
        "id": "gloves_striker_191",
        "name": "Strikers Gloves",
        "slot": "gloves",
        "gearscore": 191,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 330, "max": 405, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 441, "max": 540, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 441, "max": 540, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 5.5,       "max": 6.5,       "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 31,       "max": 38,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "min": 330,       "max": 405,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "min": 441,       "max": 540,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "min": 441,       "max": 540,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "min": 441,       "max": 540,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "min": 441,       "max": 540,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "min": 1547,       "max": 1895,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 9,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 9,      "max": 12,      "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "min": 7.5, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "min": 7.5, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
                "input": { "major": 3, "minor": 0, "skill": 1 }
        }]
    },
    {
        "id": "gloves_striker_214",
        "name": "Strikers Gloves",
        "slot": "gloves",
        "gearscore": 214,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 370, "max": 453, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 494, "max": 604, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 494, "max": 604, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 5.5,       "max": 6.5,       "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 32,       "max": 39,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "min": 370,       "max": 453,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "min": 494,       "max": 604,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "min": 494,       "max": 604,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "min": 494,       "max": 604,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "min": 494,       "max": 604,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "min": 1734,       "max": 2121,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 10,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 10,      "max": 12,      "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "min": 8, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major": 3, "minor": 0, "skill": 1 }
        }]
    },
    {
        "id": "gloves_striker_240",
        "name": "Strikers Gloves",
        "slot": "gloves",
        "gearscore": 240,
        "quality": "set",
        "itemSet": "striker",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR,       "min": 414, "max": 508, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,    "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.STAMINA,     "min": 553, "max": 678, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS, "min": 553, "max": 678, "step": 1 },

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 5.5,       "max": 7,       "step": 0.5 },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "min": 33,       "max": 40,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "min": 414,       "max": 508,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "min": 553,       "max": 678,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "min": 553,       "max": 678,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "min": 553,       "max": 678,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "min": 553,       "max": 678,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "min": 1940,       "max": 2379,       "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 10,      "max": 12,      "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 10,      "max": 12,      "step": 1 },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "min": 2.5, "max": 3, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "min": 8, "max": 9.5, "step": 0.5 },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "min": 8, "max": 9.5, "step": 0.5 }

        ],
        "validation": [{
            "validator": "fixedCount",
            "input": { "major": 3, "minor": 0, "skill": 1 }
        }]
    }
];