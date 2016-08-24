/**
 * Created by Alex on 13.05.2016.
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
import {ItemQualityIconComponent} from "../item-quality-icon/ItemQualityIconComponent";
import {DivisionItem} from "../../model/DivisionItem";
import {DivisionService} from "../../service/division.service";
import {AttributeTypePipe} from "../../pipes/AttributeTypePipe";
import {ActionCreators} from "../../redux/Actions";
import {FilterModPipe} from "../../pipes/FilterModPipe";

@Component({

    selector: 'gear-item',
    directives:[AttributesSelectorComponent, GearModComponent, TalentBoxComponent,
        NativeBoxComponent, ItemQualityComponent, ItemQualityIconComponent],
    providers: [],
    pipes: [AttributeTypePipe, FilterModPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    //styleUrls:['gear-item.css'], // TODO funzt noch nich wegen module.id fehlt
    templateUrl: './dialog.html'
})
export class GearItemComponent {
    constructor(private logger: Logger, private divisionService: DivisionService) {

    }

}
