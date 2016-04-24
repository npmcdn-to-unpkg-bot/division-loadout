import {Blueprint} from "../model/blueprint";
import {AttributeConsts, SkillConsts} from "../model/DivisionTypes";

/**
 * Created by Alex on 18.04.2016.
 */
export var WEAPONS_204: Blueprint[] = [
    {
        "id": "first_wave_m1a_204",
        "name": "First Wave M1A",
        "slot": "primary",
        "gearscore": 204,
        "quality": "highend",
        "itemSet": "none",
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_DMG,                 "min": 30000, "max": 40000, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_RPM,                 "min": 300, "max": 300, "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_MAG,                "min": 10, "max": 10, "step": 1 },
            
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_SHORT,      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_LONG,      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MAGAZINE,         "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL,      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE,      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_SHORT,      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_LONG,      "min": 1,   "max": 1,   "step": 1 },
            
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_ACCURACY,      "min": 50,   "max": 50,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_STABILITY,      "min": 40,   "max": 40,   "step": 1 },

            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_OPTIMAL_RANGE,      "min": 20,   "max": 20,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_RELOAD_SPEED,      "min": 3,   "max": 3,   "step": 1 },
            { "attributeType": "native", "attribute": AttributeConsts.HEADSHOT_DMG,      "min": 150,   "max": 160,   "step": 1 },

            // TODO sind falsche talente!
            { "attributeType": "weapon_talent", "attribute": "robust",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "weapon_talent", "attribute": "rapid",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "weapon_talent", "attribute": "vigorous",      "min": 1,   "max": 1,   "step": 1 },
            { "attributeType": "weapon_talent", "attribute": "forceful",      "min": 1,   "max": 1,   "step": 1 }
        ]
    }
];