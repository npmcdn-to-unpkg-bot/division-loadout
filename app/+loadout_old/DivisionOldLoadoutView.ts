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
import {ActivatedRoute} from "@angular/router";

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
export class DivisionOldLoadoutView {

    showWeapons: boolean = true;
    showGear: boolean = true;
    showSummary:boolean = true;

    filterWeapons:string = "";
    filterGear:string = "";
    filterSummary:string = "";

    searchWeapons:boolean;
    searchGear:boolean;
    searchSummary:boolean;

    countWeaponCards: number = 2;

    armorId = "armor";
    maskId = "mask";
    kneepadId = "kneepad";
    backpackId = "backpack";
    glovesId = "gloves";
    holsterId = "holster";

    armorItem: Observable<DivisionItem>;
    maskItem: Observable<DivisionItem>;
    kneepadItem: Observable<DivisionItem>;
    backpackItem: Observable<DivisionItem>;
    glovesItem: Observable<DivisionItem>;
    holsterItem: Observable<DivisionItem>;

    // TODO dont hardcode the weapons so the user can add as many weapon cards as he wants
    weaponOneId = "weapon_one";
    weaponTwoId = "weapon_two";
    weaponOneItem: Observable<DivisionItem>;
    weaponTwoItem: Observable<DivisionItem>;

    items: Observable<DivisionItem[]>;

    loadoutId:string;

    constructor(public store: Store<LoadoutState>,
                private loadoutService: LoadoutService,
                private firebaseService: FirebaseService,
                private route: ActivatedRoute){
        
        this.armorItem = this.loadoutService.getItemState(this.armorId);
        this.maskItem = this.loadoutService.getItemState(this.maskId);
        this.kneepadItem = this.loadoutService.getItemState(this.kneepadId);
        this.backpackItem = this.loadoutService.getItemState(this.backpackId);
        this.glovesItem = this.loadoutService.getItemState(this.glovesId);
        this.holsterItem = this.loadoutService.getItemState(this.holsterId);

        this.weaponOneItem = this.loadoutService.getItemState(this.weaponOneId);
        this.weaponTwoItem = this.loadoutService.getItemState(this.weaponTwoId);
        
        this.items = this.loadoutService.getItems();
       
    }


    private sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            if(id != null){
                // only open sharedLoadout if id is present
                this.firebaseService.openSharedLoadout(this.loadoutId);
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    rangeWeaponCards() : Array<any> {
        return new Array(this.countWeaponCards);
    }

    toggleSearchWeapons() : void {
        if(this.searchWeapons){
            this.filterWeapons = "";
        }
        
        this.searchWeapons = !this.searchWeapons;        
    }

    toggleSearchGear() : void {
        if(this.searchGear){
            this.filterGear = "";
        }

        this.searchGear = !this.searchGear;
    }

    toggleSearchSummary() : void {
        if(this.searchSummary){
            this.filterSummary = "";
        }

        this.searchSummary = !this.searchSummary;
    }
    
    addWeaponCard() : void {
        this.countWeaponCards = this.countWeaponCards + 1;
    }

    getWeaponCards() : [string][] {
        return [];
    }

    onAction(event) {
        this.loadoutService.dispatch(event);
    }
}
