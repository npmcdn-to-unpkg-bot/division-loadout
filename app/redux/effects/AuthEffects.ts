/**
 * Created by Alex on 13.05.2016.
 */
/*import { Injectable, Http } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects'

@Injectable()
export class AuthEffects {
    constructor(private http: Http, private updates$: StateUpdates) { }

    @Effect() login$ = this.updates$
            .whenAction('LOGIN') // Listen for the 'LOGIN' action
            .map(update => JSON.stringify(update.action.payload)) // Map the payload into JSON to use as the request body
            .switchMap(payload => {
                this.http.post('/auth', payload)  // If successful, dispatch success action with result
                    .map(res => ({type: 'LOGIN_SUCCESS', payload: res.json()}))
                    // If request fails, dispatch failed action
                    .catch(() => Observable.of({type: 'LOGIN_FAILED'}));
            });
}*/