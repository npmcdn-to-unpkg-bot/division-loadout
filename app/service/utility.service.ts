/**
 * Created by Alex on 09.04.2016.
 */
import {Injectable} from 'angular2/core';
import {DivisionItem} from "../model/DivisionItem";
import {DivisionService} from "./division.service";

@Injectable()
export class UtilityService {
    constructor(private _divisionService: DivisionService) { }
    
    getAttributeValue(attr:[string, number]) : string {
        let meta = this._divisionService.getAttributeMetaData(attr[0]);

        if(meta == null){
            // daten fehlen
            return "ERR";
        }

        switch (meta.datatype){
            case "percent":
                return attr[1]+"%"
            case "meter":
                return attr[1]+" m"
            case "seconds":
                return attr[1]+" s"
            default:
                return attr[1]+""
        }

    }

    getAttributeText(attr:[string, number]):string {
        let meta = this._divisionService.getAttributeMetaData(attr[0]);

        if(meta == null){
            return "Missing: " + attr[0];
        }

        return meta.description;
    }
}