import {AttributeConsts} from "../model/DivisionTypes";
import {Blueprint} from "../model/blueprint";
/**
 * Created by Alex on 24.04.2016.
 */
export var WEAPON_MODS: Blueprint[] = [
    {
        "id": "weapon_mod_magazine_204",
        "name": "Weapon Mod",
        "slot": "weapon_slot_magazine",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.WEAPON_ACCURACY, "datatype": { "type":"number", "min": 50, "max": 161 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "primary": 1, "major":3, "minor":1, "skill":1 }
        }
    },
    {
        "id": "weapon_mod_optic_204",
        "name": "Weapon Mod",
        "slot": "weapon_slot_optic_long",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.BLEED_RES, "datatype": { "type":"number", "min": 50, "max": 161 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "primary": 1, "major":3, "minor":1, "skill":1 }
        }
    },
    {
        "id": "weapon_mod_barrel_204",
        "name": "Weapon Mod",
        "slot": "weapon_slot_barrel_short",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.CHC, "datatype": { "type":"number", "min": 50, "max": 161 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "primary": 1, "major":3, "minor":1, "skill":1 }
        }
    },
    {
        "id": "weapon_mod_muzzle_204",
        "name": "Weapon Mod",
        "slot": "weapon_slot_muzzle_small",
        "gearscore": 204,
        "quality": "highend",
        "possibleAttributes": [
            { "attributeType": "major", "attribute": AttributeConsts.ASSAULT_DAMAGE, "datatype": { "type":"number", "min": 50, "max": 161 } }
        ],
        "validation": {
            "mode": "fixed",
            "input": { "primary": 1, "major":3, "minor":1, "skill":1 }
        }
    }
];