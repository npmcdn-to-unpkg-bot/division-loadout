/**
 * Created by Alex on 03.04.2016.
 */
import {Injectable} from 'angular2/core';
import {Blueprint} from "../model/blueprint";
import {DivisionAttribute} from "../model/division.attribute";
import {PossibleDivisionAttribute} from "../model/PossibleDivisionAttribute";
import {SET_BONUS} from "../data/Sets";
import {OTHER_BLUEPRINTS, GEARSCORE_204} from "../data/Other";
import {ATTRIBUTES, TALENTS} from "../data/Attributes";
import {SENTRYS_191_SET} from "../data/Sentry191";
import {SENTRYS_214_SET} from "../data/Sentry214";
import {NOMAD_191_SET} from "../data/Nomad191";
import {NOMAD_214_SET} from "../data/Nomad214";
import {ItemSlotType} from "../model/DivisionTypes";
import {SENTRYS_240_SET} from "../data/Sentry240";
import {WEAPONS_204} from "../data/Weapons204";
import {GEAR_MODS} from "../data/GearMod";
import {STRIKER_MASKS} from "../data/items/StrikerMask";
import {SENTRY_MASKS} from "../data/items/SentryMask";
import {NOMAD_MASKS} from "../data/items/NomadMask";
import {TACTICIAN_MASKS} from "../data/items/TacticianMask";
import {STRIKER_ARMORS} from "../data/items/StrikerArmor";
import {SENTRY_ARMORS} from "../data/items/SentryArmor";
import {NOMAD_ARMORS} from "../data/items/NomadArmor";
import {TACTICIAN_ARMORS} from "../data/items/TacticianArmor";
import {STRIKER_BACKPACKS} from "../data/items/StrikerBackpack";
import {SENTRY_BACKPACKS} from "../data/items/SentryBackpack";
import {NOMAD_BACKPACKS} from "../data/items/NomadBackpack";
import {TACTICIAN_BACKPACKS} from "../data/items/TacticianBackpack";
import {STRIKER_GLOVES} from "../data/items/StrikerGloves";
import {SENTRY_GLOVES} from "../data/items/SentryGloves";
import {NOMAD_GLOVES} from "../data/items/NomadGloves";
import {TACTICIAN_GLOVES} from "../data/items/TacticianGloves";
import {STRIKER_KNEEPADS} from "../data/items/StrikerKneepads";
import {SENTRY_KNEEPADS} from "../data/items/SentryKneepads";
import {NOMAD_KNEEPADS} from "../data/items/NomadKneepads";
import {TACTICIAN_KNEEPADS} from "../data/items/TacticianKneepads";
import {STRIKER_HOLSTERS} from "../data/items/StrikerHolster";
import {SENTRY_HOLSTERS} from "../data/items/SentryHolster";
import {NOMAD_HOLSTERS} from "../data/items/NomadHolster";
import {TACTICIAN_HOLSTERS} from "../data/items/TacticianHolster";
import {WEAPON_MODS} from "../data/WeaponMods";

@Injectable()
export class DivisionService {
    
    getBlueprints() : Blueprint[] {
        let result: Blueprint[] = [];

        result.push(...GEAR_MODS);
        result.push(...WEAPON_MODS);
        
        result.push(...WEAPONS_204);

        result.push(...GEARSCORE_204); // ????


        result.push(...STRIKER_MASKS);
        result.push(...SENTRY_MASKS);
        result.push(...NOMAD_MASKS);
        result.push(...TACTICIAN_MASKS);

        result.push(...STRIKER_ARMORS);
        result.push(...SENTRY_ARMORS);
        result.push(...NOMAD_ARMORS);
        result.push(...TACTICIAN_ARMORS);

        result.push(...STRIKER_BACKPACKS);
        result.push(...SENTRY_BACKPACKS);
        result.push(...NOMAD_BACKPACKS);
        result.push(...TACTICIAN_BACKPACKS);

        result.push(...STRIKER_GLOVES);
        result.push(...SENTRY_GLOVES);
        result.push(...NOMAD_GLOVES);
        result.push(...TACTICIAN_GLOVES);

        result.push(...STRIKER_KNEEPADS);
        result.push(...SENTRY_KNEEPADS);
        result.push(...NOMAD_KNEEPADS);
        result.push(...TACTICIAN_KNEEPADS);

        result.push(...STRIKER_HOLSTERS);
        result.push(...SENTRY_HOLSTERS);
        result.push(...NOMAD_HOLSTERS);
        result.push(...TACTICIAN_HOLSTERS);

        return result;
    }

    getBlueprintById(id: string) : Blueprint {
        return this.getBlueprints().filter((bp) => bp.id == id)[0];
    }
    
    getBlueprintsBySlot(slot: ItemSlotType) : Blueprint[] {
        return this.getBlueprints().filter((bp) => bp.slot == slot);
    }

    getAttributeMetaData(attrId:string): DivisionAttribute {
        let result = this.getPossibleAttributes().filter((attr) => attr.id == attrId)[0];
        return result;
    }

    getPossibleAttributes():DivisionAttribute[] {
        let result: DivisionAttribute[] = [];
        result.push(...ATTRIBUTES);
        result.push(...TALENTS);
        return result;
    }
    
    getPossibleSets(){
        let result = [];
        result.push(...SET_BONUS);
        return result;
    }
}