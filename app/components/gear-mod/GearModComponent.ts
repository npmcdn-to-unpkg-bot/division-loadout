/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ItemAttribute} from "../item-attribute/item.attribute";
import {PossibleItemAttribute} from "../possible-item-attribute/possible.item.attribute";
import {AttributeDescriptor} from "../../model/AttributeDescriptor";

import {DivisionService} from "../../service/division.service";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {htmlTemplate} from "./gear-mod.html";
import {AttributeId} from "../../model/DivisionTypes";
import {Blueprint} from "../../model/blueprint";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";

@Component({
    selector: 'gear-mod',
    directives:[AttributesSelectorComponent, PossibleItemAttribute, ItemAttribute],
    providers: [],
    pipes: [AttributeTypePipe],
    template: htmlTemplate
})
export class GearModComponent implements OnInit {
    constructor(private _divisionService: DivisionService) { }

    @Input() modId: string;
    @Input() editing: boolean;
    @Input() mod: { modId: string, blueprint:Blueprint, attributes: AttributeDescriptor[] };
    
    @Output() modRemoved = new EventEmitter();
    @Output() modInserted = new EventEmitter();
    @Output() modAttributeChanged = new EventEmitter();
    @Output() modAttributeRemoved = new EventEmitter();
       
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
        console.log("NodCmpt.onAttributeChanged");
        // TODO why the fuck is this method called, but no redux action is emitted, but in contrary the removeMod() method is?!?!?!?!?!?1
        // im JS code sieht man das hier keine Observer eingetragen sind für "action". Bei removeMod hingegen schon. WTF. Bug?
        this.modAttributeChanged.emit({ modId: this.modId, attribute: event });        
    }

    onAttributeRemoved(event: AttributeDescriptor) {
        this.modAttributeRemoved.emit({ modId: this.modId, attribute: event });        
    }
}
