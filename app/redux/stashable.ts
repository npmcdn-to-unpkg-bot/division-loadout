/**
 * Created by Alex on 18.05.2016.
 */
import {ActionReducer, Action} from "@ngrx/store";

export interface UndoableState{
    past: any[],
    present: ActionReducer<any>,
    future: any[]
}

export interface StashableState {
    stashed: any[],
    active: ActionReducer<any>
}

export const SAVE_INTO_STASH = 'SAVE_INTO_STASH';
export const REMOVE_FROM_STASH = 'REMOVE_FROM_STASH';
export const LOAD_FROM_STASH = 'LOAD_FROM_STASH'; // basically makes the loadout under a specific stashKey 'active'


// based on Rob Wormald's example http://plnkr.co/edit/UnU1wnFcausVFfEP2RGD?p=preview
// https://github.com/btroncone/ngrx-examples/blob/master/todos-undo-redo/src/app/undoable.ts
export function stashable(reducer : ActionReducer<any>) {
    // Call the reducer with empty action to populate the initial state
    const initialState : StashableState = {
        stashed: [], // TODO aus localStorage laden????
        active: reducer(undefined, {type: '__INIT__'})
    };

    return function (state = initialState, action : Action) {
        /*switch (action.type) {
            case SAVE_INTO_STASH:
            case REMOVE_FROM_STASH:
            case LOAD_FROM_STASH:

            default:
                const newPresent = reducer(state.active, action);
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                }


        }*/




       /* const { past, present, future } = state;
        switch (action.type) {

            case 'UNDO':
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [ present, ...future ]
                };
            case 'REDO':
                const next = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [ ...past, present ],
                    present: next,
                    future: newFuture
                };
            default:
                // Delegate handling the action to the passed reducer
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [ ...past, present ],
                    present: newPresent,
                    future: []
                }
        }*/
    }
}