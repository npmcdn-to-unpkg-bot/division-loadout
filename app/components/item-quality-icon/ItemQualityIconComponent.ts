/**
 * Created by Alex on 09.04.2016.
 */
import {Component, Input, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {ItemQuality, ItemSlotType} from "../../model/DivisionTypes";

@Component({
    selector: 'item-quality-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app/components/item-quality-icon/item-quality-icon.css'],
    templateUrl: 'app/components/item-quality-icon/item-quality-icon.html'
})
export class ItemQualityIconComponent {
    constructor() { }

    @Input() quality: ItemQuality;
    @Input() itemType: ItemSlotType;
    @Input() text: string = "";
    
    @HostListener('click', ['$event.target'])
    onClick(btn) {


        //alert("ItemQualityIndicator");
        //alert(this.checked);
        //alert("Click: " + this.attributeId + " -> " + this.attributeValue)
        //this.myevent.emit("Hello event!");
    }
}