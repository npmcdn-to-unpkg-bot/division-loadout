import {Injectable} from "@angular/core";
import {Store, Action} from '@ngrx/store';
import {LoadoutState} from "./LoadoutService";
import 'rxjs/add/operator/take';

@Injectable()
export class ReduxService {
    
    constructor(private store: Store<LoadoutState>) {
        
    }

    getState() : LoadoutState {
        let state;

        this.store.take(1).subscribe(s => state = s);

        return state;
    }
    
    dispatch(action) : void {
        this.store.dispatch(action);
    }
}