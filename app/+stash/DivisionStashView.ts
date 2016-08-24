/**
 * Created by Alex on 16.04.2016.
 */
import {Component} from "@angular/core";
import { Router } from '@angular/router';
import {DivisionService} from "../service/division.service";
import {Blueprint} from "../model/blueprint";
import {LoadoutService} from "../service/LoadoutService";
import {DivisionItem} from "../model/DivisionItem";
import {ActionCreators} from "../redux/Actions";

@Component({
    selector: "division-stash",
    directives: [],
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
