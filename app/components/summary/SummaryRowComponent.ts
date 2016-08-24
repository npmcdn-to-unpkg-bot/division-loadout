/**
 * Created by Alex on 03.05.2016.
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
    selector: 'summary-row',
    directives: [ItemAttribute],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: htmlTemplate
})
export class SummaryRowComponent {
    constructor(private _logger: Logger,
                private _utilService: UtilityService) {

    }

    @Input() attribute: { attribute:string, sum:number };
    
    
}
