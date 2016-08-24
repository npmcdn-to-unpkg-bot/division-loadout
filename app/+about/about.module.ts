import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {aboutRouting} from "./about.routing";
import {DivisionAboutView} from "./about.view";

@NgModule({
    imports:      [
        CommonModule,
        aboutRouting
    ],
    declarations: [
        DivisionAboutView
    ],
    exports:      [
        DivisionAboutView
    ],
    providers:    []
})
export class AboutViewModule {}

