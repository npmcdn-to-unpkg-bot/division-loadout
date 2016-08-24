
import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 10.05.2016.
 */
export var GENERIC_SET_ARMOR_191: Blueprint = {
        "id": "gear_set_armor_191",
        "name": "Gear Set Armor",
        "slot": "body",
        "gearscore": 191,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 662, "max": 811 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 441, "max": 540 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 441, "max": 540 } },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG, "datatype": { "type":"number", "min": 7,       "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 441,     "max": 540 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH, "datatype": { "type":"number", "min": 2205,    "max": 2701 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL, "datatype": { "type":"number", "min": 9,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "datatype": { "type":"number", "min": 11.50,   "max": 14,      "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT, "datatype": { "type":"number", "min": 9,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_2 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_3 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "datatype": { "type":"number", "min": 19, "max": 24 } },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 39, "max": 48 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":3, "minor":1, "skill":1 }
        }
};

export var GENERIC_SET_ARMOR_214: Blueprint = {
        "id": "gear_set_armor_214",
        "name": "Gear Set Armor",
        "slot": "body",
        "gearscore": 214,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 662, "max": 811 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 494, "max": 604 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG, "datatype": { "type":"number", "min": 7,       "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 494,     "max": 604 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH, "datatype": { "type":"number", "min": 2471,    "max": 3022 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL, "datatype": { "type":"number", "min": 10,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "datatype": { "type":"number", "min": 12,   "max": 14.5,      "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT, "datatype": { "type":"number", "min": 10,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_2 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_3 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "datatype": { "type":"number", "min": 20, "max": 24 } },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 40, "max": 49 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":3, "minor":1, "skill":1 }
        }
};

export var GENERIC_SET_ARMOR_240: Blueprint = {
        "id": "gear_set_armor_240",
        "name": "Gear Set Armor",
        "slot": "body",
        "gearscore": 240,
        "quality": "set",
        "possibleAttributes": [
            { "attributeType": "set", "attribute": "nomad" },
            { "attributeType": "set", "attribute": "sentry" },
            { "attributeType": "set", "attribute": "striker" },
            { "attributeType": "set", "attribute": "tactician" },
            
            { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 830, "max": 1018 } },
            
            { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 553, "max": 678 } },
            { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 553, "max": 678 } },

            { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG, "datatype": { "type":"number", "min": 7,       "max": 9 } },
            { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 553,     "max": 678 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH, "datatype": { "type":"number", "min": 2765,    "max": 3390 } },
            { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL, "datatype": { "type":"number", "min": 10,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES, "datatype": { "type":"number", "min": 12,   "max": 15,      "step": 0.5 } },
            { "attributeType": "major", "attribute": AttributeConsts.ELITE_PROT, "datatype": { "type":"number", "min": 10,       "max": 12 } },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_1 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_2 },
            { "attributeType": "major", "attribute": AttributeConsts.GEAR_MOD_3 },

            { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "datatype": { "type":"number", "min": 20, "max": 25 } },
            { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 41, "max": 50 } },

            { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3,   "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
            { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "set": 1, "primary": 1, "major":3, "minor":1, "skill":1 }
        }
    };
