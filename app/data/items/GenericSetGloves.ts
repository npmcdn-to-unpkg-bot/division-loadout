import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 23.04.2016.
 */
export var GENERIC_SET_GLOVES_191: Blueprint = {
        "id": "gear_set_gloves_191",
        "name": "Gear Set Gloves",
        "slot": "gloves",
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

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 5.5,       "max": 6.5,       "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 31,       "max": 38 } },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "datatype": { "type":"number", "min": 330,       "max": 405 } },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "datatype": { "type":"number", "min": 441,       "max": 540 } },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "datatype": { "type":"number", "min": 441,       "max": 540 } },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "datatype": { "type":"number", "min": 441,       "max": 540 } },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "datatype": { "type":"number", "min": 441,       "max": 540 } },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "datatype": { "type":"number", "min": 1547,       "max": 1895 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 9,      "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 9,      "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }

        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 3, "minor": 0, "skill": 1 }
        }
    };

export var GENERIC_SET_GLOVES_214: Blueprint = {
        "id": "gear_set_gloves_214",
        "name": "Gear Set Gloves",
        "slot": "gloves",
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

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 5.5,       "max": 6.5,       "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 32,       "max": 39 } },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "datatype": { "type":"number", "min": 370,       "max": 453 } },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "datatype": { "type":"number", "min": 494,       "max": 604 } },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "datatype": { "type":"number", "min": 494,       "max": 604 } },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "datatype": { "type":"number", "min": 494,       "max": 604 } },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "datatype": { "type":"number", "min": 494,       "max": 604 } },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "datatype": { "type":"number", "min": 1734,       "max": 2121 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 10,      "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 10,      "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }

        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 3, "minor": 0, "skill": 1 }
        }
    }
export var GENERIC_SET_GLOVES_240: Blueprint = {
        "id": "gear_set_gloves_240",
        "name": "Gear Set Gloves",
        "slot": "gloves",
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

            { "attributeType": "major", "attribute": AttributeConsts.CHC,             "datatype": { "type":"number", "min": 5.5,       "max": 7,       "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.CHD,             "datatype": { "type":"number", "min": 33,       "max": 40 } },
            { "attributeType": "major", "attribute": AttributeConsts.SMG_DAMAGE,      "datatype": { "type":"number", "min": 414,       "max": 508 } },
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE,      "datatype": { "type":"number", "min": 553,       "max": 678 } },
            { "attributeType": "major", "attribute": AttributeConsts.SHOTGUN_DAMAGE,      "datatype": { "type":"number", "min": 553,       "max": 678 } },
            { "attributeType": "major", "attribute": AttributeConsts.LMG_DAMAGE,      "datatype": { "type":"number", "min": 553,       "max": 678 } },
            { "attributeType": "major", "attribute": AttributeConsts.PISTOL_DAMAGE,      "datatype": { "type":"number", "min": 553,       "max": 678 } },
            { "attributeType": "major", "attribute": AttributeConsts.SNIPER_DAMAGE,      "datatype": { "type":"number", "min": 1940,       "max": 2379 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "datatype": { "type":"number", "min": 10,      "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "datatype": { "type":"number", "min": 10,      "max": 12 } },

            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG,         "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC,    "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF,    "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE,     "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE,   "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }

        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major": 3, "minor": 0, "skill": 1 }
        }
    };
