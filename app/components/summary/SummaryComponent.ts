/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DivisionItem} from "../../model/DivisionItem";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";
import {DivisionService} from "../../service/division.service";
import {AttributeConsts, AttributeId, SkillConsts} from "../../model/DivisionTypes";
import {htmlTemplate} from "./summary.html";
import {SummaryRowComponent} from "./SummaryRowComponent";


@Component({
    selector: 'summary',
    directives: [SummaryRowComponent],
    template: htmlTemplate,
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: []
})
export class SummaryComponent implements OnInit {

    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _utilService: UtilityService) {


    }

    @Input() filter: string;
    
    @Input() items:DivisionItem[] = [];

    attrConsts = AttributeConsts;
    skillConsts = SkillConsts;
    
    ngOnInit() {

    }

    getHealthString() : string {
        let staminaHealth = this.getSumOfAttribute("stamina").sum * 30;
        let directHealth = this.getSumOfAttribute("health").sum;

        return (staminaHealth + directHealth) + " Health";
    }

    getSkillpowerString() : string {
        let electronicsSkill = this.getSumOfAttribute("electronics").sum * 10;
        let directSkill = this.getSumOfAttribute(AttributeConsts.SKILL_POWER).sum;

        return (electronicsSkill + directSkill) + " Skillpower";
    }

    getArmorString() : string {
        // TODO create a new service fpr this kind of calculations
        let armor = this.getSumOfAttribute("armor").sum;
        let red = armor / (450 * Math.pow(1.1, 29));
        red = red * 100;
        red = Math.floor(red);

        if(red > 65){
            red = 65;
            // TODO show warning
        }
        return armor + " Armor ( " + red + "% Reduction )";
    }

    getSumOfAttribute(attributeId:string): { attribute:string, sum:number } {
        let sum = 0;

        // TODO local cache?
        
        this.items.forEach(item => {
            sum += item.attributes
                .filter(attr => attr.attribute == attributeId)
                .filter(attr => attr.value != null)
                .filter(attr => typeof attr.value === "number")
                .map(attr => <number>attr.value)
                .reduce((a, b) => (a + b), 0);

        });

        // TODO mods muessen auch noch mit rein ...

        // TODO besser als pipe?

        return { attribute: attributeId, sum: sum };
    }    
}