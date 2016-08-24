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