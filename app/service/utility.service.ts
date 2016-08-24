/**
 * Created by Alex on 09.04.2016.
 */
import {Injectable} from '@angular/core';
import {DivisionItem} from "../model/DivisionItem";
import {DivisionService} from "./division.service";
import {AttributeDescriptor} from "../model/AttributeDescriptor";
import {AttributeId} from "../model/DivisionTypes";

@Injectable()
export class UtilityService {
    constructor(private _divisionService: DivisionService) { }
    
    getAttributeValue(attr:AttributeDescriptor) : string {
        let meta = this._divisionService.getAttributeMetaData(attr != null ? attr.attribute : null);

        if(meta == null){
            console.log("Missing! " + attr.attribute, attr);
            // daten fehlen
            return "ERR";
        }

        if(attr.datatype == null || attr.datatype.type == 'boolean'){
            return "";
        }

        switch (meta.datatype){
            case "percent":
                return "+" + attr.value + "%"
            case "meter":
                return "+" + attr.value + " m"
            case "seconds":
                return "+" + attr.value + " s"
            default:
                return "+" + attr.value + ""
        }

    }

    getAttributeText(attr:AttributeDescriptor): string {
        let meta = this._divisionService.getAttributeMetaData(attr != null ? attr.attribute : null);

        if(meta == null){
            console.log("Missing! " + attr.attribute, attr);
            return "Missing: " + attr.attribute;
        }

        return meta.description;
    }

    getAttributeTextById(attr:AttributeId): string {
        let meta = this._divisionService.getAttributeMetaData(attr);

        if(meta == null){
            console.log("Missing! " + attr, attr);
            return "Missing: " + attr;
        }

        return meta.description;
    }
}