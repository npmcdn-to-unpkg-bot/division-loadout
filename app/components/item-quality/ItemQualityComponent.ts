/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, HostListener} from '@angular/core';
import {ItemQuality} from "../../model/DivisionTypes";

@Component({
    selector: 'item-quality',
    styleUrls: ['app/components/item-quality/item-quality.css'],
    templateUrl: 'app/components/item-quality/item-quality.html'
})
export class ItemQualityComponent {
    constructor() { }

    @Input() quality: ItemQuality;

    @HostListener('click', ['$event.target'])
    onClick(btn) {


        //alert("ItemQualityIndicator");
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}