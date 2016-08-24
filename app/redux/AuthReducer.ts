import {ActionReducer, Action} from '@ngrx/store';
import {DivisionItem} from "../model/DivisionItem";
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {ActionTypes} from "./Actions";

/**
 * Created by Alex on 14.05.2016.
 */
export const auth:ActionReducer<any> = (state = null, action:Action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {
                uid: action.payload.uid
            }
        default:
            return state;
    }
}