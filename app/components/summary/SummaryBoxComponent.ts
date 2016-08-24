/**
 * Created by Alex on 15.05.2016.
 */
import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DivisionItem} from "../../model/DivisionItem";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";
import {DivisionService} from "../../service/division.service";
import {ItemAttribute} from "./../item-attribute/item.attribute";
import {MapToIterable} from "../../pipes/MapToIterablePipe";
import {AttributeConsts, AttributeId, SkillConsts} from "../../model/DivisionTypes";
import {Subscription} from "rxjs/Subscription";
import {htmlTemplate} from "./summary-row.html";
import {AttributeDescriptor} from "../../model/AttributeDescriptor";


@Component({
    selector: 'summary-box',
    directives: [ItemAttribute],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <div style="margin-bottom: 20px; text-align: center; background-color: #282828; border: 1px solid grey;">
            <div style="  padding: 5px; border-bottom: 1px solid grey;">{{getHealthString()}}</div>
            <div style="display: inline-block; color: grey;  border-right: 1px solid grey; width: 33%;">Stamina (33%)</div>
            <div style="display: inline-block; color: grey; width: 66%;">Health (67%)</div>
    </div>
    
    `
})
export class SummaryBoxComponent {
    constructor(private _logger: Logger,
                private _utilService: UtilityService) {

    }

    @Input() attribute: { attribute:string, sum:number };


}
