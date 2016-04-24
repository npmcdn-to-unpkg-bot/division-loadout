/**
 * Created by Alex on 03.04.2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {SharedService} from "../../service/shared.service";
import {DivisionItem} from "../../model/DivisionItem";
import {UtilityService} from "../../service/utility.service";
import {Logger} from "../../service/logger.service";
import {DivisionService} from "../../service/division.service";
import {ItemAttribute} from "./../item-attribute/item.attribute";
import {MapToIterable} from "../../pipes/MapToIterablePipe";
import {AttributeConsts, AttributeId, SkillConsts} from "../../model/DivisionTypes";


@Component({
    selector: 'summary',
    directives: [ItemAttribute],
    templateUrl: 'app/components/summary/summary.html',
    pipes: [MapToIterable]
})
export class SummaryComponent implements OnInit {
    constructor(private _divisionService: DivisionService,
                private _logger: Logger,
                private _sharedService: SharedService,
                private _utilService: UtilityService) { }

    // TODO hier tupel anstatt map?
    private sumAttributes: { [from: string] : number } = {
        "range": 22
    }
    
    ngOnInit() {
        setInterval(() => this.computeSummary(), 2000);

    }

    changeAttributes():void{
        this.sumAttributes["firearms"] = Math.floor(Math.random() * 500) + 1700
        this.sumAttributes["stamina"] = Math.floor(Math.random() * 500) + 2100
        this.sumAttributes["electronics"] = Math.floor(Math.random() * 500) + 700
    }

    getPrimarys() : any {
        let result = [];

        result[0] = this.getAttribute(AttributeConsts.FIREARMS);
        result[1] = this.getAttribute(AttributeConsts.STAMINA);
        result[2] = this.getAttribute(AttributeConsts.ELECTRONICS);

        return result;
    }
    getDefense(): any {
        let result = [];

        result.push(this.getAttribute(AttributeConsts.ARMOR));

        return result;
    }

    getResistances() : any {
        let result = [];

        result.push(this.getAttribute(AttributeConsts.BURN_RES));
        result.push(this.getAttribute(AttributeConsts.SHOCK_RES));
        result.push(this.getAttribute(AttributeConsts.DISRUPT_RES));
        result.push(this.getAttribute(AttributeConsts.DISORIENT_RES));
        result.push(this.getAttribute(AttributeConsts.BLIND_RES));
        result.push(this.getAttribute(AttributeConsts.BLEED_RES));

        return result;
    }

    getAttribute(attribute:AttributeId) : any {
        return [attribute, this.sumAttributes[attribute] == null ? "0" : this.sumAttributes[attribute]];
    }

    getSkills() : any {
        let result = [];
        let attrs:AttributeId[] = [];
        attrs.push(SkillConsts.FIRST_AID_ALLY);
        attrs.push(SkillConsts.FIRST_AID_SELF);
        attrs.push(SkillConsts.PULSE_CHC);
        attrs.push(SkillConsts.PULSE_CHD);
        attrs.push(SkillConsts.PULSE_DURATION);
        attrs.push(SkillConsts.SEEKER_DAMAGE);
        attrs.push(SkillConsts.SEEKER_RADIUS);
        attrs.push(SkillConsts.SHIELD_HEALTH);
        attrs.push(SkillConsts.SMART_DURATION);
        attrs.push(SkillConsts.SMARTCOVER_DMG_RES);
        attrs.push(SkillConsts.STATION_DURATION);
        attrs.push(SkillConsts.STATION_HEALTH);
        attrs.push(SkillConsts.STATION_SPEED);
        attrs.push(SkillConsts.STICKY_DAMAGE);
        attrs.push(SkillConsts.STICKY_RADIUS);
        attrs.push(SkillConsts.TURRET_DAMAGE);
        attrs.push(SkillConsts.TURRET_DURATION);
        attrs.push(SkillConsts.TURRET_HEALTH);


        for(var attr of attrs){
            if(this.getAttribute(attr)[1] != "0"){
                result.push(this.getAttribute(attr));
            }
        }

        return result;
    }

    getMisc() : any {
        let result = [];

        let ignoredAttributes:string[] = [];
        ignoredAttributes.push(AttributeConsts.FIREARMS+"");
        ignoredAttributes.push(AttributeConsts.STAMINA+"");
        ignoredAttributes.push(AttributeConsts.ELECTRONICS+"");
        ignoredAttributes.push(AttributeConsts.BURN_RES+"");
        ignoredAttributes.push(AttributeConsts.SHOCK_RES+"");
        ignoredAttributes.push(AttributeConsts.DISRUPT_RES+"");
        ignoredAttributes.push(AttributeConsts.DISORIENT_RES+"");
        ignoredAttributes.push(AttributeConsts.BLIND_RES+"");
        ignoredAttributes.push(AttributeConsts.BLEED_RES+"");
        ignoredAttributes.push(SkillConsts.FIRST_AID_ALLY+"");
        ignoredAttributes.push(SkillConsts.FIRST_AID_SELF+"");
        ignoredAttributes.push(SkillConsts.PULSE_CHC+"");
        ignoredAttributes.push(SkillConsts.PULSE_CHD+"");
        ignoredAttributes.push(SkillConsts.PULSE_DURATION+"");
        ignoredAttributes.push(SkillConsts.SEEKER_DAMAGE+"");
        ignoredAttributes.push(SkillConsts.SEEKER_RADIUS+"");
        ignoredAttributes.push(SkillConsts.SHIELD_HEALTH+"");
        ignoredAttributes.push(SkillConsts.SMART_DURATION+"");
        ignoredAttributes.push(SkillConsts.SMARTCOVER_DMG_RES+"");
        ignoredAttributes.push(SkillConsts.STATION_DURATION+"");
        ignoredAttributes.push(SkillConsts.STATION_HEALTH+"");
        ignoredAttributes.push(SkillConsts.STATION_SPEED+"");
        ignoredAttributes.push(SkillConsts.STICKY_DAMAGE+"");
        ignoredAttributes.push(SkillConsts.STICKY_RADIUS+"");
        ignoredAttributes.push(SkillConsts.TURRET_DAMAGE+"");
        ignoredAttributes.push(SkillConsts.TURRET_DURATION+"");
        ignoredAttributes.push(SkillConsts.TURRET_HEALTH+"");

        ignoredAttributes.push(AttributeConsts.GEAR_MOD+"");
        ignoredAttributes.push(AttributeConsts.ARMOR+"");

        for (var key in this.sumAttributes) {
            if (this.sumAttributes.hasOwnProperty(key)) {
                let value = this.sumAttributes[key];

                if(ignoredAttributes.indexOf(key) >= 0){
                    continue;
                }

                result.push([key, value]);
            }
        }

        return result;
    }

    computeSummary() : void {

        // first get all possible attributes and iterate over
        //this._divisionService.getPossibleAttributes().


        let resultsMap = this._sharedService.getResults();
        //this._logger.log(JSON.stringify(resultsMap))

        //alert(JSON.stringify(resultsMap));

        this.sumAttributes = {};

        for (var key in resultsMap) {
            var value = resultsMap[key];

            // key -> id der komponente (item-card); value -> DivisionItem (Vom nutzer ausgewählte attribute)
            for (var attribute of value.majors) {
                this._logger.log(JSON.stringify(attribute))
                if(this.sumAttributes[attribute[0]] == null){
                    this.sumAttributes[attribute[0]] = 0;
                }
                this.sumAttributes[attribute[0]] += attribute[1];
            }
            for (var attribute of value.minors) {
                if(this.sumAttributes[attribute[0]] == null){
                    this.sumAttributes[attribute[0]] = 0;
                }
                this.sumAttributes[attribute[0]] += attribute[1];
            }
            for (var attribute of value.natives) {
                if(this.sumAttributes[attribute[0]] == null){
                    this.sumAttributes[attribute[0]] = 0;
                }
                this.sumAttributes[attribute[0]] += attribute[1];
            }
            for (var attribute of value.skills) {
                if(this.sumAttributes[attribute[0]] == null){
                    this.sumAttributes[attribute[0]] = 0;
                }
                this.sumAttributes[attribute[0]] += attribute[1];
            }
            for (var attribute of value.mods) {
                if(this.sumAttributes[attribute[0]] == null){
                    this.sumAttributes[attribute[0]] = 0;
                }
                this.sumAttributes[attribute[0]] += attribute[1];
            }

        }


    }
}
