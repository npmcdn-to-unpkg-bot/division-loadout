
import {Blueprint} from "../../model/blueprint";
import {AttributeConsts, SkillConsts} from "../../model/DivisionTypes";

/**
 * Created by Alex on 10.05.2016.
 */
export var GENERIC_SET_BACKPACK_191: Blueprint ={
    "id": "gear_set_backpack_191",
    "name": "Gear Set Backpack",
    "slot": "backpack",
    "gearscore": 191,
    "quality": "set",
    "possibleAttributes": [
        { "attributeType": "set", "attribute": "nomad" },
        { "attributeType": "set", "attribute": "sentry" },
        { "attributeType": "set", "attribute": "striker" },
        { "attributeType": "set", "attribute": "tactician" },
        
        { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 441, "max": 540 } },
        { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "datatype": { "type":"number", "min": 20,  "max": 24 } },
        { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },

        { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 441, "max": 540 } },
        { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 441, "max": 540 } },
        { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 441, "max": 540 } },

        { "attributeType": "major", "attribute": AttributeConsts.CHD, "datatype": { "type":"number", "min": 15,      "max": 19 } },
        { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 330,     "max": 405 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE, "datatype": { "type":"number", "min": 9,      "max": 12 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "datatype": { "type":"number", "min": 4410,    "max": 5402 } },
        { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN, "datatype": { "type":"number", "min": 9,      "max": 12 } },

        { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES, "datatype": { "type":"number", "min": 44, "max": 54 } },
        { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 39, "max": 48 } },

        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION, "datatype": { "type":"number", "min": 7.5, "max": 9.5, "step": 0.5 } }

    ],
    "validation": {
        "mode": "fixed",
        "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":2 }
    }
};

export var GENERIC_SET_BACKPACK_214: Blueprint = {
    "id": "gear_set_backpack_214",
    "name": "Gear Set Backpack",
    "slot": "backpack",
    "gearscore": 214,
    "quality": "set",
    "possibleAttributes": [
        { "attributeType": "set", "attribute": "nomad" },
        { "attributeType": "set", "attribute": "sentry" },
        { "attributeType": "set", "attribute": "striker" },
        { "attributeType": "set", "attribute": "tactician" },
        
        { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 494, "max": 604 } },
        { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "datatype": { "type":"number", "min": 20,  "max": 24 } },
        { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },

        { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 494, "max": 604 } },
        { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 494, "max": 604 } },
        { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 494, "max": 604 } },

        { "attributeType": "major", "attribute": AttributeConsts.CHD, "datatype": { "type":"number", "min": 16,      "max": 19 } },
        { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 370,     "max": 453 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE, "datatype": { "type":"number", "min": 10,      "max": 12 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "datatype": { "type":"number", "min": 4942,    "max": 6045 } },
        { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN, "datatype": { "type":"number", "min": 10,      "max": 12 } },

        { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES, "datatype": { "type":"number", "min": 49, "max": 60 } },
        { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 40, "max": 49 } },

        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5} },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }

    ],
    "validation": {
        "mode": "fixed",
        "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":2 }
    }
};

export var GENERIC_SET_BACKPACK_240: Blueprint = {
    "id": "gear_set_backpack_240",
    "name": "Gear Set Backpack",
    "slot": "backpack",
    "gearscore": 240,
    "quality": "set",
    "possibleAttributes": [
        { "attributeType": "set", "attribute": "nomad" },
        { "attributeType": "set", "attribute": "sentry" },
        { "attributeType": "set", "attribute": "striker" },
        { "attributeType": "set", "attribute": "tactician" },
        
        { "attributeType": "native", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 553, "max": 678 } },
        { "attributeType": "native", "attribute": AttributeConsts.BACKPACK_CAP, "datatype": { "type":"number", "min": 20,  "max": 24 } },
        { "attributeType": "native", "attribute": AttributeConsts.GEAR_MOD_1 },

        { "attributeType": "primary", "attribute": AttributeConsts.FIREARMS, "datatype": { "type":"number", "min": 553, "max": 678 } },
        { "attributeType": "primary", "attribute": AttributeConsts.STAMINA, "datatype": { "type":"number", "min": 553, "max": 678 } },
        { "attributeType": "primary", "attribute": AttributeConsts.ELECTRONICS, "datatype": { "type":"number", "min": 553, "max": 678 } },

        { "attributeType": "major", "attribute": AttributeConsts.CHD, "datatype": { "type":"number", "min": 16,      "max": 20 } },
        { "attributeType": "major", "attribute": AttributeConsts.ARMOR, "datatype": { "type":"number", "min": 414,     "max": 508 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_HASTE, "datatype": { "type":"number", "min": 10,      "max": 12 } },
        { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER, "datatype": { "type":"number", "min": 5530,    "max": 6780 } },
        { "attributeType": "major", "attribute": AttributeConsts.SIGNATURE_GAIN, "datatype": { "type":"number", "min": 10,      "max": 12 } },

        { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.DISRUPT_RES, "datatype": { "type":"number", "min": 11, "max": 14 } },
        { "attributeType": "minor", "attribute": AttributeConsts.BLEED_RES, "datatype": { "type":"number", "min": 55, "max": 67 } },
        { "attributeType": "minor", "attribute": AttributeConsts.AMMO_CAP, "datatype": { "type":"number", "min": 41, "max": 50 } },

        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_DMG, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_INC, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMARTCOVER_DMG_RES, "datatype": { "type":"number", "min": 2.5, "max": 3, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SHIELD_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_ALLY, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.FIRST_AID_SELF, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.MOBILE_COVER_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_CHD, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.PULSE_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SEEKER_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.SMART_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STICKY_RADIUS, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_SPEED, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.STATION_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_HEALTH, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DAMAGE, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } },
        { "attributeType": "skill", "attribute": SkillConsts.TURRET_DURATION, "datatype": { "type":"number", "min": 8, "max": 9.5, "step": 0.5 } }

    ],
    "validation": {
        "mode": "fixed",
        "input": { "set": 1, "primary": 1, "major":1, "minor":1, "skill":2 }
    }
};
