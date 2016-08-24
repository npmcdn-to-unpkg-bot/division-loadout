/**
 * Created by Alex on 03.04.2016.
 */
import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import {NativeBoxComponent} from "../native-box/NativeBoxComponent";
import {ItemQualityComponent} from "../item-quality/ItemQualityComponent";
import {TalentBoxComponent} from "../talent-box/TalentBoxComponent";
import {GearModComponent} from "../gear-mod/GearModComponent";
import {AttributesSelectorComponent} from "../attributes-selector/AttributesSelectorComponent";
import {htmlTemplate} from "./item-card.html";
import {ItemQualityIconComponent} from "../item-quality-icon/ItemQualityIconComponent";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";
import {FilterModPipe} from "../../pipes/FilterModPipe";
import {Blueprint} from "../../model/blueprint";
import {ActionCreators} from "../../redux/Actions";
import {SelectBlueprint} from "./select-blueprint/SelectBlueprint";
import {DivisionService} from "../../service/division.service";

@Component({
    selector: 'item-card',
    directives:[ItemQualityComponent, SelectBlueprint, ItemQualityIconComponent],
    providers: [],
    pipes: [AttributeTypePipe, FilterModPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    //styleUrls:['app/components/item-card/item-card.css'], // TODO funzt noch nich wegen module.id fehlt
    template: htmlTemplate
})
export class ItemCardComponent {
    
    @Input() cardTitle:string;
    @Input() editing:boolean;
    @Input() itemType;
    @Input() blueprint: Blueprint = null;
    @Output() onEditButton = new EventEmitter();
    @Output() onResetButton = new EventEmitter();
    @Output() onBlueprintSelected = new EventEmitter();

    // TODO filter implementieren?
    filter = "";
    
    constructor(private divisionService: DivisionService) {

    }
    
    getPossibleBlueprints() : Blueprint[] {
        return this.divisionService.getBlueprintsBySlot(this.itemType)
            .filter(bp => bp.name.toUpperCase().includes(this.filter == null ? "" : this.filter.toUpperCase()))
            .sort((left,right) => {
                if (left.gearscore > right.gearscore) {
                    return -1;
                }

                if (left.gearscore < right.gearscore) {
                    return 1;
                }

                return 0;
            });
    }
    
    selectedBlueprint(event:Blueprint) : void {
        this.onBlueprintSelected.emit(event);
    }

    edit(event){
        this.onEditButton.emit({});
    }

    reset(event) {
        this.onResetButton.emit({});
    }
}
