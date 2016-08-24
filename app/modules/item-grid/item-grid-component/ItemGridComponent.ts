/**
 * Created by Alex on 15.08.2016.
 */
import {Component, Input, HostListener, ViewChildren, QueryList} from '@angular/core';

@Component({
    selector: 'item-grid',
    styleUrls: ['app/modules/item-grid/item-grid-component/item-grid.css'],
    templateUrl: 'app/modules/item-grid/item-grid-component/item-grid.html'
})
export class ItemGridComponent {

    //@ViewChildren(ItemGridCellComponent) CellComponents: QueryList<ItemGridCellComponent>;

    constructor() { }

    columns: number = 10;
    rows: number = 10;

    drag(event) : any {
        console.log(event);


        event.dataTransfer.setData("text", event.target.id);
    }

    drop(event) : any {
        event.preventDefault();
        console.log(event);

        var data = event.dataTransfer.getData("text");
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    }

    allowDrop(event) : any {
        event.preventDefault();
        console.log(event);



    }

    dragenter(event) : any {
        event.preventDefault();
        console.log(event);

        if(event.target.style == undefined)
            return;

        event.target.style.color = "red";

    }

    dragleave(event) : any {
        event.preventDefault();
        console.log(event);

        if(event.target.style == undefined)
            return;

        event.target.style.color = "white";

    }

    range(range: number) {
        let list: number[] = [];

        for(let i = 0 ; i < range ; i++){
            list.push(i);
        }

        return list;
    }
}