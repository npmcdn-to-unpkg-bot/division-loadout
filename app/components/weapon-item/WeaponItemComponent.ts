/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Blueprint} from '../../model/blueprint';
import {AttributeDescriptor} from "../../model/AttributeDescriptor";

import {Logger} from "../../service/logger.service";
import {AttributeType, ItemSlotType, AttributeConsts, AttributeId} from "../../model/DivisionTypes";
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";
import {SelectBlueprint} from "../item-card/select-blueprint/SelectBlueprint";
import {WeaponAttributeComponent} from "../weapon-attribute/WeaponAttributeComponent";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";
import {WeaponModComponent} from "../weapon-mod/WeaponModComponent";
import {htmlTemplate} from "./weapon-item.html";
import {ItemQualityIconComponent} from "../item-quality-icon/ItemQualityIconComponent";
import {DivisionItem} from "../../model/DivisionItem";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";
import {ActionCreators} from "../../redux/Actions";
import {DivisionService} from "../../service/division.service";
import {ItemCardComponent} from "../item-card/ItemCardComponent";
import {ItemAttributeTypePipe} from "../../pipes/ItemAttributeTypePipe";
import {ItemValidationPipe} from "../../pipes/ItemValidationPipe";
import {WeaponAttributePipe} from "../../pipes/weapon/WeaponAttributePipe";
import {WeaponModsPipe} from "../../pipes/weapon/WeaponModsPipe";

@Component({
    selector: 'weapon-item',
    directives:[
        WeaponModComponent, WeaponAttributeComponent, 
        NativeBoxComponent, ItemCardComponent , TalentBoxComponent, 
        ItemQualityIconComponent, AttributesSelectorComponent
    ],
    providers: [],
    pipes: [
        AttributeTypePipe, ItemAttributeTypePipe, ItemValidationPipe, 
        WeaponAttributePipe,
        WeaponModsPipe
    ],
    template: htmlTemplate
})
export class WeaponItemComponent {
    constructor(private logger: Logger,
                private divisionService: DivisionService) { }
    
    @Input() itemType: ItemSlotType;
    @Input() itemId: string;
    @Input() filter: string;
    
    @Input() item: DivisionItem = null;

    @Output() action = new EventEmitter();
    
    editing: boolean = false;

    get Blueprint() : Blueprint {
        if(this.item == null){
            return null;
        }

        return this.item.blueprint;
    }

    getCardTitle(){
        return this.item != null ? this.Blueprint.name : " ... ";
    } 
    
    toggleEditMode() : void {
        this.editing = !this.editing;
    }

    getMod(modId: string) : any {
        if(this.item.mods == null){
            return null;
        }
        // TODO besser als pipe?
        return this.item.mods.find(mod => mod.modId == modId)
    }

    // TODO implement getSumOfAttributeResult() but restricted on specific category

    getSumOfAttributeResult(attributeId: AttributeId) : number {
        if(this.item == null){
            return -1;
        }

        let result = this.item.attributes
            .filter(attr => attr.attribute == attributeId)
            .filter(attr => attr.value != null)
            .filter(attr => typeof attr.value === "number")
            .map(attr => <number>attr.value)
            .reduce((a, b) => (a + b), 0);


        // TODO besser als pipe?

        return result;
    }

    getDPS(){
        return 150000;
    }

    onEditButton(){
        this.editing = !this.editing;
    }

    onResetButton(){
        this.action.emit(ActionCreators.resetBlueprintItem(this.itemId));
    }

    onBlueprintSelected(event:Blueprint) : void {
        this.action.emit(ActionCreators.changeBlueprintItem(this.itemId, event));
    }

    resetBlueprint(){
        this.action.emit(ActionCreators.resetBlueprintItem(this.itemId));
    }

    onAttributeChanged(event: AttributeDescriptor) : void {
        this.action.emit(ActionCreators.changeAttributeItem(this.itemId, event));
    }

    onAttributeRemoved(event: AttributeDescriptor) : void {
        this.action.emit(ActionCreators.removeAttributeItem(this.itemId, event));
    }

    onModInsertGearMod(event: { modId:string, blueprint:Blueprint }) : void {
        this.action.emit(ActionCreators.insertGearMod(this.itemId, event.modId, event.blueprint));
    }

    onModRemoveGearMod(event: { modId:string }){
        this.action.emit(ActionCreators.removeGearMod(this.itemId, event.modId));
    }

    onModAttributeChanged(event: { modId:string, attribute: AttributeDescriptor }) : void {
        this.action.emit(ActionCreators.changeAttributeMod(this.itemId, event.modId, event.attribute));
    }

    onModAttributeRemoved(event: { modId:string, attribute: AttributeDescriptor }) : void {
        this.action.emit(ActionCreators.removeAttributeMod(this.itemId, event.modId, event.attribute));
    }
}
