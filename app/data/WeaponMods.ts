import {AttributeConsts} from "../model/DivisionTypes";
import {Blueprint} from "../model/blueprint";
/**
 * Created by Alex on 24.04.2016.
 */
export var WEAPON_MODS: Blueprint[] = [
    {
        "id": "weapon_mod_204",
        "name": "Weapon Mod",
        "slot": "weapon_slot_magazine",
        "gearscore": 204,
        "quality": "highend",
        "itemSet": "none",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.WEAPON_ACCURACY, "min": 50, "max": 161, "step": 1 }
        ]
    }
];