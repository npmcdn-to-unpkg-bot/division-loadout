/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, AfterViewInit, OnInit} from '@angular/core';

import {DivisionService} from "../../service/division.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

@Component({
    selector: 'weapon-attribute',
    styleUrls: ['app/components/weapon-attribute/weapon-attribute.css'],
    templateUrl: 'app/components/weapon-attribute/weapon-attribute.html'
})
export class WeaponAttributeComponent implements AfterViewInit, OnInit {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() attributeId: string;
    @Input() attributeValue: number;

    ngOnInit() {

    }

    ngAfterViewInit() {

    }
}