import {Component, Input, OnInit, HostListener, Output, EventEmitter, AfterViewInit} from 'angular2/core';

import {Blueprint} from '../../model/blueprint';
import {DivisionItem} from '../../model/DivisionItem';
import {PossibleDivisionAttribute} from "../../model/PossibleDivisionAttribute";

import {DivisionService} from "../../service/division.service";
import {SharedService} from "../../service/shared.service";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";

/**
 * Created by Alex on 21.04.2016.
 */
@Component({
    selector: 'talent-box',
    templateUrl: 'app/components/talent-box/talent-box.html'
})
export class TalentBoxComponent implements AfterViewInit, OnInit {
    constructor(private _divisionService: DivisionService,
                private _utilService: UtilityService,
                private _logger: Logger) { }

    @Input() possibleTalents: string[];
    @Input() selectedTalent: PossibleDivisionAttribute;

    editing: boolean;

    @Output() onTalentChanged = new EventEmitter();
    
    // possibleTalents(In) und currentTalent(In, Out)
    
    ngOnInit() {

    }

    ngAfterViewInit() {

    }

    selectTalent(talent: PossibleDivisionAttribute) : void {
        this.selectedTalent = talent;

        this.editing = false;
    }
}