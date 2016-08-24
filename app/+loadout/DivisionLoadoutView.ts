/**
 * Created by Alex on 16.04.2016.
 */
import {Component, OnInit} from "@angular/core";
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {LoadoutState, LoadoutService} from "../service/LoadoutService";
import {DivisionItem} from "../model/DivisionItem";
import {FirebaseService} from "../service/FirebaseService";

@Component({
    selector: "division-loadout",
    templateUrl: 'app/+loadout/loadout-view.html'
})
export class DivisionLoadoutView {

    loadout: Observable<{ id:string, title:string, itemKeys:string[] }> ;

    loadoutId:string;

    items: Observable<DivisionItem>[];
    
    constructor(private loadoutService: LoadoutService,
                private firebaseService: FirebaseService){
        
        this.loadout = this.loadoutService.getLoadout("test");
        this.loadout.subscribe(loadout => {
                        
            loadout.itemKeys.forEach(itemKey => {
                this.items.push(this.loadoutService.getItemState(itemKey));
            });
        });
    }

    onAction(event) {
        this.loadoutService.dispatch(event);
    }
}
