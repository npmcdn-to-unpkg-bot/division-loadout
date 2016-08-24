import {Injectable} from "@angular/core";
import {Store, Action} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {DivisionItem} from "../model/DivisionItem";
import {FirebaseService} from "./FirebaseService";
import {ActionCreators} from "../redux/Actions";
/**
 * Created by Alex on 08.05.2016.
 */

export interface LoadoutState {
    // TODO die map aufsplitten weil sonst immer alle items neu gerenedert werden sobald auch nur eines geändert wurde?
    divisionItems: DivisionItem[]; // TODO rename to 'loadout'
    auth: { uid:string };
    
    stash: DivisionItem[][];

    loadouts: { id:string, title:string, itemKeys:string[] }[];

    editing; // TODO ???
    showing; // TODO ???
    filtering; // TODO ???
}


@Injectable()
export class LoadoutService {

    // TODO dont hardcode the weapons so the user can add as many weapon cards as he wants

    
    
    constructor(private store: Store<LoadoutState>, private firebase:FirebaseService) {
        // TODO hier die ganzen store dinge kapseln
        // TODO anstatt hier jeweils itemId und itemItem zu speichern und BEIDE den 
        // jeweiligen komponenten zu geben (GearItem, WaeponItem) besser den komponenten NUR die id(string) geben.
        // Dann innerhalb der komponenten über diesen service per id (einmalig da observable) das Observable holen(getItemState).


    }
    
    getItemState(itemId) : Observable<DivisionItem> {
        return this.store.select(state => state.divisionItems.find(item => item.itemId == itemId));
    }
    
    getItems() : Observable<DivisionItem[]> {
        return this.store.select(state => state.divisionItems);
    }
    
    
    getLoadout(loadoutId: string) : Observable<{ id:string, title:string, itemKeys:string[] }> {
        return this.store.select(state => state.loadouts.find(loadout => loadout.id == loadoutId));
    }
    
    getStash() : Observable<DivisionItem[][]>{
        return this.store.select(state => state.stash);
    }

    localSave(){
        //this.store.dispatch(ActionCreators.saveIntoStash("MyGreatTitle", new Date().getTime()+"", this.store.getState().divisionItems));
    }

    dispatchWithoutFb(action: Action){
        // TODO refactor
        this.store.dispatch(action);
    }
    
    dispatch(action: Action){
        // TODO das hier mit firebaser beser absichern
        this.firebase.pushAction(action);

        this.store.dispatch(action);
    }
}