/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "@angular/core";
import {LoadoutService} from "../service/LoadoutService";
import {DivisionItem} from "../model/DivisionItem";
import {ActionCreators} from "../redux/Actions";

@Component({
    selector: "division-stash",
    templateUrl: "app/+stash/division.html"
})
export class DivisionStashView {
   

    constructor(private loadoutService:LoadoutService) {
        
    }

    getLoadouts(){
        return this.loadoutService.getStash();
    }

    loadFromStash(loadout: { title:string, stashKey:string, loadout:DivisionItem[] } ){

        console.log("DivisionStashView", loadout);
        this.loadoutService.dispatchWithoutFb(ActionCreators.importDivisionItems(loadout.loadout));
    }
}
