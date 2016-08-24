/**
 * Created by Alex on 16.04.2016.
 */
import {Component, OnInit} from "@angular/core";
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {WeaponItemComponent} from "../components/weapon-item/WeaponItemComponent";
import {GearItemComponent} from "../components/gear-item/GearItemComponent";
import {SummaryComponent} from "../components/summary/SummaryComponent";
import {LoadoutState, LoadoutService} from "../service/LoadoutService";
import {htmlTemplate} from "./loadout-view.html";
import {DivisionItem} from "../model/DivisionItem";
import {Logger} from "../service/logger.service";
import {FirebaseService} from "../service/FirebaseService";
import {DIALOG_DIRECTIVES} from "../shared/modal-dialog/Dialog";
import {MDL} from "../util/MDL";

@Component({
    selector: "division-loadout",
    directives: [
        WeaponItemComponent,
        GearItemComponent,
        SummaryComponent,
        DIALOG_DIRECTIVES,
        MDL
    ],
    providers: [LoadoutService],
    template: htmlTemplate
})
export class DivisionLoadoutView {

    loadout: Observable<{ id:string, title:string, itemKeys:string[] }> ;

    loadoutId:string;

    items: Observable<DivisionItem>[];
    
    constructor(public store: Store<LoadoutState>,
                private loadoutService: LoadoutService,
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
