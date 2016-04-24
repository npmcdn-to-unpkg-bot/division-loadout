import {Blueprint} from "../model/blueprint";
import {AttributeConsts} from "../model/DivisionTypes";
/**
 * Created by Alex on 23.04.2016.
 */
export var GEAR_MODS: Blueprint[] = [
    {
        "id": "gear_mod_204",
        "name": "Gear Mod",
        "slot": "gear_mod",
        "gearscore": 204,
        "quality": "highend",
        "itemSet": "none",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.FIREARMS, "min": 50, "max": 161, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.STAMINA, "min": 50, "max": 161, "step": 1 },
            { "attributeType": "major", "attribute": AttributeConsts.ELECTRONICS, "min": 50, "max": 161, "step": 1 },



            { "attributeType": "major", "attribute": AttributeConsts.FIREARMS, "min": 50, "max": 161, "step": 1 },
        ]
    }
];