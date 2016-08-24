/**
 * Created by Alex on 07.05.2016.
 */
import {ActionReducer, Action} from '@ngrx/store';
import {DivisionItem} from "../model/DivisionItem";
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {ActionTypes} from "./Actions";



export const gearMod:ActionReducer<any> = (state = null, action:Action) => {
    /*
     { modId?: string,
        blueprintId?: string,
        attributes?:[PossibleDivisionAttribute, number][]     }
     */
    switch (action.type) {
        case ActionTypes.INSERT_GEAR_MOD:
            // hier muss die blueprintId gesetzt werden. die action wird geschickt wenn der nutzer auf ein "+" in der gui klickt.
            // vorerst soll in der gui keine bp auswahl für mods stattfinden, daher wird hier bzw in der componente eine genereische bp id für mods genommen.
            // TODO wann wird das initiale mod objekt miot modId gestzt????
            // -> in der gui die attributes scannen. für jeden mod slot ein neues "feld" anzeigen mit "+". 
            // wenn +, dann wird bpId und modId(index ueber loop in gui?) per event hierher gesendet

            return {
                modId: action.payload.modId,
                blueprint: action.payload.blueprint,
                attributes: this.itemAttributes(null, action)
            };
        case ActionTypes.REMOVE_ATTRIBUTE_MOD:
        case ActionTypes.CHANGE_ATTRIBUTE_MOD:
            return Object.assign({}, state, {
                attributes: this.itemAttributes(state.attributes, action)
            });
        default:
            return state;
    }
}

export const gearMods:ActionReducer<{}[]> = (state = [], action:Action) => {
    /*
    {
        modId?: string,
        blueprintId?: string,
        attributes?:[PossibleDivisionAttribute, number][]
    }[]
    */
    switch (action.type) {
        case ActionTypes.REMOVE_GEAR_MOD:
            return state.filter(gearMod => {
                    return gearMod.modId !== action.payload.modId
            });
        case ActionTypes.INSERT_GEAR_MOD:
            return [
                ...state,
                this.gearMod(null ,action)
            ];
        case ActionTypes.REMOVE_ATTRIBUTE_MOD:
        case ActionTypes.CHANGE_ATTRIBUTE_MOD:
            let result = state.map(mod => {
                return this.gearMod(mod, action);
            });
            return result;
        default:
            return state;
    }
}


export const itemAttribute:ActionReducer<AttributeDescriptor> = (state = null, action:Action) => {
    // state -> AttributeDescriptor
    // State of one attributes
    switch (action.type) {
        case ActionTypes.CHANGE_ATTRIBUTE_ITEM:
            if(state.attributeType !== action.payload.attribute.attributeType){
                return state;
            }
            if(state.attribute !== action.payload.attribute.attribute){
                return state;
            }

            let mixin = {};

            if(action.payload.attribute.datatype == null){
                // boolean datatype
                mixin = { value: action.payload.attribute.value != null ? action.payload.attribute.value : true };
            } else {
                // number datatype
                mixin = { value: action.payload.attribute.value != null ? action.payload.attribute.value : action.payload.attribute.datatype.max };
            }

            return  Object.assign({}, state, mixin);
        case ActionTypes.REMOVE_ATTRIBUTE_ITEM:
            if(state.attributeType !== action.payload.attribute.attributeType){
                return state;
            }
            if(state.attribute !== action.payload.attribute.attribute){
                return state;
            }

            return Object.assign({}, state, {
                value: null
            });
        default:
            return state;
    }
}

export const itemAttributes:ActionReducer<AttributeDescriptor[]> = (state = [], action:Action) => {
    // state -> AttributeDescriptor[]
    // State of all attributes  of one item. (from all attribute categorys) (so all natives, majors or minors ...)
    switch (action.type) {
        case ActionTypes.RESET_BLUEPRINT_ITEM:
            // reset the attributes
            // TODO kommt der hier überhaupt rein???
            return [];
        case ActionTypes.INSERT_GEAR_MOD:
        case ActionTypes.CHANGE_BLUEPRINT_ITEM:
             // Insert the default attributes (for example: all PossibleItemAttributes with a value of null, and natives on max)   


            let result = action.payload.blueprint.possibleAttributes.map(possAttr => {
                 if(possAttr.attributeType == 'native'){
                     if(possAttr.datatype == null){
                         // its a boolean datatype
                         possAttr.value = true;
                     } else {
                         possAttr.value = possAttr.datatype.max;
                     }

                 }
                 return possAttr;
             });

            return result;
        case ActionTypes.CHANGE_ATTRIBUTE_ITEM:
        case ActionTypes.REMOVE_ATTRIBUTE_ITEM:
            // Just delegate to the "itemAttribute"-reducer
            return state.map(attribute => {
                return this.itemAttribute(attribute, action);
            });
        default:
            return state;
    }
}

export const item:ActionReducer<DivisionItem> = (state:DivisionItem = {}, action:Action) => {
    // Complete state of ONE item
    switch (action.type) {
        case ActionTypes.RESET_BLUEPRINT_ITEM:
            // TODO kommt der hier überhaupt rein???
            if(state.itemId !== action.payload.itemId){
                return state;
            }

            return Object.assign({});
        case ActionTypes.REMOVE_GEAR_MOD:
        case ActionTypes.INSERT_GEAR_MOD:
            if(state.itemId !== action.payload.itemId){
                return state;
            }

            return Object.assign({}, state, {
                mods: this.gearMods(state.mods, action)
            });
        case ActionTypes.CHANGE_BLUEPRINT_ITEM:
            // Merges: the actual state of an item + the new blueprint + default attributes for this item
            return Object.assign({}, state, {
                itemId: action.payload.itemId,
                blueprint: action.payload.blueprint,
                attributes: this.itemAttributes(null, action)
            });
        case ActionTypes.REMOVE_ATTRIBUTE_MOD:
        case ActionTypes.CHANGE_ATTRIBUTE_MOD:
            if(state.itemId !== action.payload.itemId){
                return state;
            }

            return Object.assign({}, state, {
                mods: this.gearMods(state.mods, action)
            });
        case ActionTypes.REMOVE_ATTRIBUTE_ITEM:
        case ActionTypes.CHANGE_ATTRIBUTE_ITEM:
           if(state.itemId !== action.payload.itemId){
               return state;
           }

           return Object.assign({}, state, {
               attributes: this.itemAttributes(state.attributes, action)
           });
        default:
            return state;
    }
}

export const divisionItems:ActionReducer<DivisionItem[]> = (state:DivisionItem[] = [], action:Action) => {
    switch (action.type) {
        case ActionTypes.INSERT_GEAR_MOD:
        case ActionTypes.REMOVE_GEAR_MOD:
        case ActionTypes.REMOVE_ATTRIBUTE_MOD:
        case ActionTypes.CHANGE_ATTRIBUTE_MOD:
        case ActionTypes.REMOVE_ATTRIBUTE_ITEM:
        case ActionTypes.CHANGE_ATTRIBUTE_ITEM:
            // Just delegate to the "Item"-reducer
            return state.map(item => {
                return this.item(item, action);
            });
        case ActionTypes.CHANGE_BLUEPRINT_ITEM: // -> ADD_ITEM?
            if(state.find(item => item.itemId == action.payload.itemId) != null){
                console.error("divisionItemsReducer.CHANGE_BLUEPRINT_ITEM");
                // only add if not already an element with same itemId in state
                // TODO better error logging.
                return state;
            }

            return [
                ...state,
                this.item(null, action)
            ];
        case ActionTypes.RESET_BLUEPRINT_ITEM: // -> REMOVE_ITEM?
            return state.filter(item => {
                return item.itemId !== action.payload.itemId;
            });
            /*let itemWithId = state.find(item => item.itemId == action.payload.itemId);
            let index = state.indexOf(itemWithId);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];*/
        case ActionTypes.LOAD_FROM_STASH:
        case ActionTypes.IMPORT_DIVISION_ITEMS:
            return [
                ...action.payload.state
            ];
        default:
            return state;
    }
}