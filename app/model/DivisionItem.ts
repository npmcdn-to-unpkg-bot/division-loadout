import {AttributeDescriptor} from "./AttributeDescriptor";
import {Blueprint} from "./blueprint";
/**
 * Created by Alex on 03.04.2016.
 */
export interface DivisionItem {
    itemId?: string;
    blueprint?: Blueprint;
    attributes?: AttributeDescriptor[];
    mods?: { 
        modId?: string, 
        blueprint?: Blueprint, 
        attributes?: AttributeDescriptor[]
    }[];
}
    /**
     * Example:
     * Map<number, string> = new Map<string, number>();
     * attributes = [
     *      [PossibleDivisionAttribute, number],
     *      [PossibleDivisionAttribute, number],
     *      ...
     * ]
     *
     * {  OLD VERSION
     *      native: [ ... ]
     *      major: [ [armor, 100], [health, 3404] ]
     *      minor: [ ... ]
     *      skill: [ ... ]
     *      mods: {[
     *               {      modId: <MOD_ID_1>:????
     *                      blueprintId: "",
     *                      attributes:[ [armor, 100], [health, 3404] ... ]
     *                  }]
     *              <MOD_ID_2>: [ ... ]
     *              ...
     *      }
     * }
     */