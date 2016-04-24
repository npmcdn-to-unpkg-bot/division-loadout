/**
 * Created by Alex on 03.04.2016.
 */
import {Injectable} from 'angular2/core';
import {DivisionItem} from "../model/DivisionItem";
import {Logger} from "./logger.service";
import {Router, RouteParams} from "angular2/router";

@Injectable()
export class SharedService {
    constructor(private _router: Router,
                private _logger: Logger,
                routeParams: RouteParams) {
        let dataAsString = routeParams.get('data');

        if(dataAsString != null){
             try {
                this.results = JSON.parse(atob(dataAsString));
             } catch (e) {
                this._logger.log(`Not valid JSON: ${dataAsString}`);
                }
             }

    }
    
    private results: { [from: string] : DivisionItem } = {};
    
    // http://stackoverflow.com/questions/35884451/angular-2-sibling-component-communication?lq=1
    // dictionary. jeder komponente trägt unter seiner id bei änderung sein "result" ein

    setResult(from:string, result:DivisionItem): void {
        this.results[from] = result;

        this._router.navigate(['DivisionLoadout',  {data: btoa(JSON.stringify(this.results))} ]);
    }

    getResult(from:string) : DivisionItem {
        return this.results[from];
    }

    getResults() : { [from: string] : DivisionItem } {
        return this.results;
    }
}