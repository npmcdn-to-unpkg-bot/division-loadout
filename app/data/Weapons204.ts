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
        "possibleAttributes": [
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_DMG, "datatype": { "type":"number", "min": 30000, "max": 40000 } },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_RPM, "datatype": { "type":"number", "min": 300, "max": 300 } },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_BASE_MAG, "datatype": { "type":"number", "min": 10, "max": 10 } },
            
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_SHORT  },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_BARREL_LONG   },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MAGAZINE      },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_SMALL  },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_MUZZLE_LARGE  },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_SHORT   },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_SLOT_OPTIC_LONG    },
            
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_ACCURACY, "datatype": { "type":"number", "min": 50,   "max": 50 } },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_STABILITY, "datatype": { "type":"number", "min": 40,   "max": 40 } },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_OPTIMAL_RANGE, "datatype": { "type":"number", "min": 20,   "max": 20 } },
            { "attributeType": "native", "attribute": AttributeConsts.WEAPON_RELOAD_SPEED, "datatype": { "type":"number", "min": 3,   "max": 3 } },
            
            { "attributeType": "native", "attribute": AttributeConsts.HEADSHOT_DMG, "datatype": { "type":"number", "min": 150,   "max": 160 } },

            // TODO sind falsche talente!
            { "attributeType": "weapon_talent", "attribute": "robust" },
            { "attributeType": "weapon_talent", "attribute": "rapid" },
            { "attributeType": "weapon_talent", "attribute": "vigorous" },
            { "attributeType": "weapon_talent", "attribute": "forceful" }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "weapon_talent": 3 }
        }
    }
];