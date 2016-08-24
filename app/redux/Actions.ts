import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {DivisionItem} from "../model/DivisionItem";
/**
 * Created by Alex on 11.05.2016.
 */
export const ActionTypes = {
    // TODO refactor names. They r not consistent nor very descriptive ..
    CHANGE_BLUEPRINT_ITEM: 'CHANGE_BLUEPRINT_ITEM',
    RESET_BLUEPRINT_ITEM: 'RESET_BLUEPRINT_ITEM',
    INSERT_GEAR_MOD: 'INSERT_GEAR_MOD',
    REMOVE_GEAR_MOD: 'REMOVE_GEAR_MOD',
    CHANGE_ATTRIBUTE_ITEM: 'CHANGE_ATTRIBUTE_ITEM',
    REMOVE_ATTRIBUTE_ITEM: 'REMOVE_ATTRIBUTE_ITEM',
    CHANGE_ATTRIBUTE_MOD: 'CHANGE_ATTRIBUTE_MOD',
    REMOVE_ATTRIBUTE_MOD: 'REMOVE_ATTRIBUTE_MOD',

    AUTH_SUCCESS: 'AUTH_SUCCESS',
    IMPORT_DIVISION_ITEMS: 'IMPORT_DIVISION_ITEMS',

    SAVE_INTO_STASH: 'SAVE_INTO_STASH',
    LOAD_FROM_STASH: 'LOAD_FROM_STASH',    
    REMOVE_FROM_STASH: 'REMOVE_FROM_STASH',


    CHANGE_EDITING_ITEM: 'CHANGE_EDITING_ITEM',
    ADD_WEAPON_CARD: 'ADD_WEAPON_CARD'
}

export const ActionCreators = {
    // TODO maybe better as service with direct dispatch?
    authSuccess (uid:string) {
        return {
            type: ActionTypes.AUTH_SUCCESS,
            payload: {
                uid: uid
            }
        }
    },
    saveIntoStash(title:string, stashKey:string, loadout:DivisionItem[]){
        return {
            type: ActionTypes.SAVE_INTO_STASH,
            payload: {
                stashKey: stashKey,
                loadout: loadout,
                title: title
            }
        }
    },
    importDivisionItems (state:any) {
        return {
            type: ActionTypes.IMPORT_DIVISION_ITEMS,
            payload: {
                state: state
            }
        }
    },
    changeBlueprintItem (itemId:string, bp) {
        return { 
            type: ActionTypes.CHANGE_BLUEPRINT_ITEM,
            payload: {
                itemId: itemId,
                blueprint: bp
            }
        }
    },
    resetBlueprintItem (itemId:string) {
        return {
            type: ActionTypes.RESET_BLUEPRINT_ITEM,
            payload: {
                itemId: itemId
            }
        }
    },
    insertGearMod (itemId:string, modId:string, bp) {
        return { 
            type: ActionTypes.INSERT_GEAR_MOD, 
            payload: {
                itemId: itemId,
                modId: modId,
                blueprint: bp
            } 
        }
    },
    removeGearMod (itemId:string, modId:string) {
        return {
            type: ActionTypes.REMOVE_GEAR_MOD,
            payload: {
                itemId: itemId,
                modId: modId
            }
        }
    },
    changeAttributeItem (itemId:string, attribute:AttributeDescriptor) {        
        return { 
            type: ActionTypes.CHANGE_ATTRIBUTE_ITEM, 
            payload: {
                itemId: itemId,
                attribute: attribute
            }
        }
    },
    removeAttributeItem (itemId:string, attribute:AttributeDescriptor) {       
        return { 
            type: ActionTypes.REMOVE_ATTRIBUTE_ITEM, 
            payload: {
                itemId: itemId,
                attribute: attribute
            }
        }
    },
    changeAttributeMod (itemId:string, modId:string, attribute:AttributeDescriptor) {
        return { 
            type: ActionTypes.CHANGE_ATTRIBUTE_MOD,
            payload: {
                itemId: itemId,
                modId: modId,
                attribute: attribute
            }
        }
    },
    removeAttributeMod (itemId:string, modId:string, attribute:AttributeDescriptor) {
        return { 
            type: ActionTypes.REMOVE_ATTRIBUTE_MOD,
            payload: {
                itemId: itemId,
                modId: modId,
                attribute: attribute
            }
        }
    },
}