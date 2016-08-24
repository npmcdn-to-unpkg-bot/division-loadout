export const htmlTemplate = `

<div style=" display: table; margin: 5px 0; width:100%; border-left: 2px solid #4084c5; ">
    
    <div class="gear-mod-container" style="padding-left: 10px;">

        <div *ngIf="mod?.blueprint == null" (click)="debugBpSelect()" style="color: white;">
            <i class="fa fa-chevron-left" aria-hidden="true" style="font-size: 1rem; margin: auto 3px;"></i>
            Empty Gear Mod
            <i class="fa fa-chevron-right" aria-hidden="true" style="font-size: 1rem; margin: auto 3px;"></i>
        </div>
        <div *ngIf="mod?.blueprint != null" style="color: white;">

            {{mod?.blueprint.id}}
        </div>

        <!-- TODO alle attribute von gearmods sind momentan noch "major" -->
        <div *ngIf="mod != null"  >
            <attributes-selector
                    (changed)="onAttributeChanged($event)"
                    (removed)="onAttributeRemoved($event)"
                    [attributes]="mod.attributes | attributeType:'major'"
                    [editing]="editing">
            </attributes-selector>
        </div>
    </div>

    <div *ngIf="mod?.blueprint != null" (click)="removeMod()" style="display: table-cell; color: darkred; text-align: center;">
        <i class="fa fa-times" aria-hidden="true"></i>
    </div>
</div>

`;