/**
 * Created by Alex on 16.08.2016.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ItemGridComponent} from "./item-grid-component/ItemGridComponent";

@NgModule({
    imports:      [ CommonModule ],
    declarations: [
        ItemGridComponent
    ],
    exports:      [
        ItemGridComponent
    ],
    providers:    []
})
export class ItemGridModule { }