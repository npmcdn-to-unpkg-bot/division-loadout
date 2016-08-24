import {ActionReducer, Action} from '@ngrx/store';
import {DivisionItem} from "../model/DivisionItem";
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {ActionTypes} from "./Actions";

/**
 * Created by Alex on 14.05.2016.
 */
export const stash:ActionReducer<any> = (state = [], action:Action) => {
    if(state == null){
        return [];
    }
    
    switch (action.type) {
        case ActionTypes.SAVE_INTO_STASH:
            // TODO
            // payload.stashkey -> id in der localstorage (zB date beim erstellen)
            // payload.loadout -> DivisionItem[] (Also ein Loadout-state)
            // payload.title -> ein vom user vergebener title zur besseren identifizierung später

            return [
                ...state,
                {
                    loadout:  action.payload.loadout,
                    stashKey: action.payload.stashKey,
                    title: action.payload.title
                }               
            ];
        //case ActionTypes.LOAD_INTO_STASH: ??? rehydrate??
        default:
            return state;
    }
}


/*type: ActionTypes.SAVE_INTO_STASH,
    payload: {
    stashKey: id,
        loadout: items
}*/