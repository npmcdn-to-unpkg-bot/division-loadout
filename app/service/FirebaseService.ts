import {Injectable} from "@angular/core";
import {Store, Action} from '@ngrx/store';
//import {AngularFire} from "angularfire2";
import {LoadoutState} from "./LoadoutService";
import {ActionCreators} from "../redux/Actions";
import { Router } from '@angular/router';
import { Observable } from "rxjs/observable"
import {ReduxService} from "./ReduxService";

/**
 * Created by Alex on 14.05.2016.
 */

@Injectable()
export class FirebaseService {
    // TODO diser service nur solange bis ngrx/effects einsatzbereit ist (?)
    // wandelt im grunde events von firebase in actions für den store um.
    // und auch umgekehrt?




    constructor(private router: Router,
                private reduxService: ReduxService
       // ,                private af: AngularFire
    ) {

        //const relative = af.database.object('/item');

       /* af.auth.subscribe(auth => {
            // TODO use ngrx/sideeffects
            console.log("af.auth.subscribe", auth);
            if(auth != null) {
                reduxService.dispatch(ActionCreators.authSuccess(auth.uid));
            }
        });
*/
    }

    loadoutId: number = null;
    actions = null;
    base = null;
    lastIndex = 0;


    lastLength = 0;

    openSharedLoadout(loadoutId:string){
      /*  if(loadoutId == null ){
            console.warn("openSharedLoadout: ", loadoutId);
            return;
        }

        this.base = this.af.object('/loadouts/' + loadoutId + '/base');
        this.base.subscribe(data => {
            console.log("Importing base-data from Backend ...", data, loadoutId);
            this.reduxService.dispatch(ActionCreators.importDivisionItems(data));
        });

        this.actions =  this.af.database.list('/loadouts/' + loadoutId + '/actions');
        this.actions.subscribe(data => {
            console.log("received actions: ", data, loadoutId);

            if(this.lastLength == 0){
                this.alreadyDispatched = [];
            }
            
            this.lastLength = data.length;

            data.forEach(action => {
                console.log("subscribe2.child!", action, loadoutId);
                if(this.alreadyDispatched.indexOf(action.$key) >= 0){
                    // already dispatched ...
                    console.log("alreadyDispatched", action);
                } else {

                    this.reduxService.dispatch(action);
                    this.alreadyDispatched.push(action.$key);
                }

            });
         }); */
    }

    alreadyDispatched: string[] = [];

    pushAction(action:Action){
        // TODO use Effects or Middleware
       /*  if(this.actions != null && this.base != null){
            // TODO wenn die größe der actions größer als 10(?) ist,
            // dann neuen base setzen und die actions clearen.

            if(this.lastLength > 10) {

                // set new base-state

                

                this.base.set(this.reduxService.getState().divisionItems);

                console.log("pushAction.rebuild", this.loadoutId);

                // ... and clear the actions
                this.actions.remove();


                return;
            }

            console.log("pushAction", action);
            this.actions.push(action);
        } */
    }



    share(){
        // 1. loadout in liste eintragen. den $key speichern.
        /*let list = this.af.database.list('/loadouts');
        let result = list.push({
            actions: [],
            base: this.reduxService.getState().divisionItems
        });

        // TODO hierauf aufbauend nun immer die redux-actions pushen wenn die uid zu dem ladout passt.

        // 2. den key und die uid verknüpfen und in die ownership tabelle eintragen
        let objRef = this.af.object('/ownership/' + result.key());
        objRef.set({
            created: new Date().getTime(),
            owner: this.reduxService.getState().auth.uid
        });

        // 3. das andere objekt initilaisieren
        let objRef2 = this.af.object('/loadouts-meta/' + result.key());
        objRef2.set({
            views: 1,
            viewer: 1,
            starred: 0
        }); */
    }
}