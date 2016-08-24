/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Blueprint} from '../../model/blueprint';
import {AttributeDescriptor} from "../../model/AttributeDescriptor";
import { Logger } from "../../service/logger.service";
import {ItemSlotType, AttributeId, AttributeConsts} from "../../model/DivisionTypes";
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";
import {GearModComponent} from "../gear-mod/GearModComponent";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {htmlTemplate} from "./gear-item.html";
import {ItemQualityIconComponent} from "../item-quality-icon/ItemQualityIconComponent";
import {DivisionItem} from "../../model/DivisionItem";
import {DivisionService} from "../../service/division.service";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";
import {ActionCreators} from "../../redux/Actions";
import {FilterModPipe} from "../../pipes/FilterModPipe";
import {ItemCardComponent} from "../item-card/ItemCardComponent";
import {ItemAttributeTypePipe} from "../../pipes/ItemAttributeTypePipe";
import {ItemValidationPipe} from "../../pipes/ItemValidationPipe";
import {ItemGearModsPipe} from "../../pipes/ItemGearModsPipe";

@Component({
    // TODO moduleId: module.id,
    selector: 'gear-item',
    directives:[AttributesSelectorComponent, GearModComponent, TalentBoxComponent,
        NativeBoxComponent, ItemQualityComponent, ItemQualityIconComponent, ItemCardComponent],
    providers: [],
    pipes: [AttributeTypePipe, FilterModPipe, ItemAttributeTypePipe, ItemValidationPipe, ItemGearModsPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    //styleUrls:['gear-item.css'], // TODO funzt noch nich wegen module.id fehlt
    template: htmlTemplate
})
export class GearItemComponent {
    constructor(private logger: Logger, private divisionService: DivisionService) {

    }
    
    @Input() itemType: ItemSlotType;
    @Input() itemId: string;
    @Input() filter: string;

    @Input() item: DivisionItem = null;

    @Output() action = new EventEmitter();
    
    editing: boolean;

    get Blueprint() : Blueprint {
        if(this.item == null){
            return null;
        }

        return this.item.blueprint;
    }


    isEmpty() : boolean {
        //this.itemCompanion.getItemAttributes().values().
        // TODO
        
       /* for (var attributeType in this.itemCompanion.result.attributes) {
            // Dont count native attributes
            if(attributeType == 'native')
                continue;

            // All selected values per AttributeType (major, native, minor ...)
            let currentValues = this.itemCompanion.result.attributes[attributeType];

            if(currentValues.length > 0){
                // We found an attribute thats not native, so return.
                return false;
            }
        }*/
        
        return false;
    }

    // TODO implement getSumOfAttributeResult() but restricted on specific category
    
    getSumOfAttributeResult(attributeId: AttributeId) : number {
        //let result = this.itemCompanion.getSumOfAttributes(attributeId);
        //return result;
        return 42;
    }

    title: string = null;

    getCardTitle(){
        if(this.item == null){
            return " ... ";
        }

        let title = null;

        let temp = this.item.attributes
            .filter(attr => attr.attributeType == "set")
            .filter(attr => attr.value != null)
            .filter(attr => attr.value == true);

        // TODO
        if(temp.length == 1){
            switch(temp[0].attribute){
                case "nomad":
                    break;
                case "":
                    break;
                case "":
                    break;
                case "":
                    break;
            }
        }

        return title == null ? this.Blueprint.name : title;
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
