import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PlaygroundView} from "./playground.view";
import {playgroundRouting} from "./playground.routing";
import {ItemGridModule} from "../modules/item-grid/item.grid.module";

@NgModule({
    imports:      [
        CommonModule,
        playgroundRouting,

        ItemGridModule,
    ],
    declarations: [
        PlaygroundView
    ],
    exports:      [
        PlaygroundView
    ],
    providers:    []
})
export class PlaygroundViewModule {}

