/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AttributeDescriptor} from "../../model/AttributeDescriptor";

import {DivisionService} from "../../service/division.service";
import {htmlTemplate} from "./gear-mod.html";
import {Blueprint} from "../../model/blueprint";

@Component({
    selector: 'gear-mod',
    template: htmlTemplate
})
export class GearModComponent implements OnInit {
    constructor(private _divisionService: DivisionService) { }

    @Input() modId: string;
    @Input() editing: boolean;
    @Input() mod: { modId: string, blueprint:Blueprint, attributes: AttributeDescriptor[] };
    
    @Output() modRemoved            = new EventEmitter();
    @Output() modInserted           = new EventEmitter();
    @Output() modAttributeChanged   = new EventEmitter();
    @Output() modAttributeRemoved   = new EventEmitter();
       
    ngOnInit() {
        // blueprintId:"gear_mod_204"
        //this.blueprintCompanion.BlueprintId = this.blueprintId;
    }

    debugBpSelect(){
        // TODO dont hardcode this. instead make the user select a specific mod ...
        let bp = this._divisionService.getBlueprintById("gear_mod_204");
        
        this.modInserted.emit({ modId: this.modId, blueprint: bp});
    }

    removeMod(){
        this.modRemoved.emit({ modId: this.modId });    
    }

    onAttributeChanged(event: AttributeDescriptor) {
        this.modAttributeChanged.emit({ modId: this.modId, attribute: event });        
    }

    onAttributeRemoved(event: AttributeDescriptor) {
        this.modAttributeRemoved.emit({ modId: this.modId, attribute: event });        
    }
}
