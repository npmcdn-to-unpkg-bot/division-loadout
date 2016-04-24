import {AttributeConsts, SkillConsts, TalentConsts} from "../model/DivisionTypes";

/**
 * Created by Alex on 17.04.2016.
 */
export var SET_BONUS = [
{
        "id": "sentry",
        "name": "Sentrys Call",
        "bonusAttributes":[
                { "attributeType": "set_bonus_2", "attribute": AttributeConsts.HEADSHOT_DMG, "min": 30, "max": 30, "step": 1 },
                { "attributeType": "set_bonus_3", "attribute": AttributeConsts.ELITE_DMG, "min": 20, "max": 20, "step": 1 },
                { "attributeType": "set_bonus_4", "attribute": TalentConsts.STALKER }
            ]
},{
        "id": "tactician",
        "name": "Tacticians Authority",
        "bonusAttributes":[
                { "attributeType": "set_bonus_2", "attribute": AttributeConsts.SKILL_POWER, "min": 4000, "max": 4000, "step": 1 },
                { "attributeType": "set_bonus_3", "attribute": AttributeConsts.SKILL_HASTE, "min": 20, "max": 20, "step": 1 },
                { "attributeType": "set_bonus_4", "attribute": TalentConsts.TACTICIAN }
            ]
    },
    {
        "id": "nomand",
        "name": "Path of the Nomad",
        "bonusAttributes":[
                { "attributeType": "set_bonus_2", "attribute": AttributeConsts.SCAVAGING, "min": 50, "max": 50, "step": 1 },
                { "attributeType": "set_bonus_3", "attribute": AttributeConsts.HEALTH_ON_KILL, "min": 20, "max": 20, "step": 1 },
                { "attributeType": "set_bonus_4", "attribute": TalentConsts.NOMAD }
            ]
    },
    {
        "id": "strike",
        "name": "Strikers Battlegear",
        "bonusAttributes":[
                { "attributeType": "set_bonus_2", "attribute": AttributeConsts.ARMOR_DMG, "min": 20, "max": 20, "step": 1 },
                { "attributeType": "set_bonus_3", "attribute": AttributeConsts.CHD, "min": 50, "max": 50, "step": 1 },
                { "attributeType": "set_bonus_4", "attribute": TalentConsts.SHOOTER }
            ]
    }
];

export var SET_191_STANDARD_MAJORS = [
    
];

export var SET_191_STANDARD_MINORS = [

];

export var SET_191_STANDARD_NATIVES = [

];

export var SET_191_STANDARD_SKILLS = [

];

export var SET_214_STANDARD_MAJORS = [
    { "attributeType": "major", "attribute": AttributeConsts.SLOT_2,          "min": 1,       "max": 1,       "step": 1 },
    { "attributeType": "major", "attribute": AttributeConsts.ELITE_DMG,       "min": 10,      "max": 12,      "step": 1 },
    { "attributeType": "major", "attribute": AttributeConsts.CHC,             "min": 4,       "max": 5,       "step": 1 },
    { "attributeType": "major", "attribute": AttributeConsts.HEALTH_ON_KILL,  "min": 10,      "max": 12,      "step": 1 },
    { "attributeType": "major", "attribute": AttributeConsts.EXOTIC_DMG_RES,  "min": 12,      "max": 14.50,   "step": 0.5 },
    { "attributeType": "major", "attribute": AttributeConsts.HEALTH,          "min": 1858,    "max": 2272,    "step": 1 },
    { "attributeType": "major", "attribute": AttributeConsts.SKILL_POWER,     "min": 3716,    "max": 4545,    "step": 1 }
];

export var SET_214_STANDARD_MINORS = [
    { "attributeType": "minor", "attribute": AttributeConsts.ARMOR_DMG, "min": 6, "max": 7, "step": 1 },
    { "attributeType": "minor", "attribute": AttributeConsts.SCAVAGING, "min": 20, "max": 24, "step": 1 },
    { "attributeType": "minor", "attribute": AttributeConsts.KILL_XP, "min": 10, "max": 12, "step": 1 },
    { "attributeType": "minor", "attribute": AttributeConsts.BURN_RES, "min": 11, "max": 14, "step": 1 },
    { "attributeType": "minor", "attribute": AttributeConsts.BLIND_RES, "min": 11, "max": 14, "step": 1 },
    { "attributeType": "minor", "attribute": AttributeConsts.DISORIENT_RES, "min": 11, "max": 14, "step": 1 }
];

export var SET_214_STANDARD_NATIVES = [
    { "attributeType": "native", "attribute": AttributeConsts.FIREARMS,         "min": 494, "max": 604, "step": 1 },
    { "attributeType": "native", "attribute": AttributeConsts.STAMINA,          "min": 494, "max": 604, "step": 1 },
    { "attributeType": "native", "attribute": AttributeConsts.ELECTRONICS,      "min": 494, "max": 604, "step": 1 }
];

export var SET_214_STANDARD_SKILLS = [

];