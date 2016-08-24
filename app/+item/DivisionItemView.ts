/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "@angular/core";

import {WeaponItemComponent} from "../components/weapon-item/WeaponItemComponent";
import {GearItemComponent} from "../components/gear-item/GearItemComponent";
import {SummaryComponent} from "../components/summary/SummaryComponent";

@Component({
    selector: "division-item",
    directives: [WeaponItemComponent, GearItemComponent, SummaryComponent],
    templateUrl: "app/+item/item-view.html"
})
export class DivisionItemView {

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

    onResultUpdate() {
        
    }

}
