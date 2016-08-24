export const htmlTemplate = `

<div *ngIf="blueprint != null" 
    class="division-card item-card" 
    [class.green-borders]="blueprint.quality == 'set'"
    [class.orange-borders]="blueprint.quality == 'highend'">
   
    <div class="division-card-header" >

        
        <item-quality-icon
                class=""
                style="float: left;"
                [text]="blueprint.gearscore"
                [itemType]="itemType"
                [quality]="blueprint.quality">
        </item-quality-icon>
        
        <div style="padding: 0; text-align: center; font-weight: bold; height: 32px; font-size: 1.3rem;">
            {{cardTitle}}
        </div>
        <div class="" style="padding: 0; height: 32px;">
            
    
            <div class="blueprint-bottom-btn" style="padding: 0; display:inline-block; width: 35%; margin-left: 10px;"
                 (click)="edit()"
                 [class.white-background]="editing">
                <i title="edit-mode" class="fa"
                    [class.fa-pencil-square-o]="!editing"
                    [class.fa-check-square-o]="editing"                   
                   aria-hidden="true">
                </i> {{editing ? 'editing' : 'edit'}}
            </div>
    
            <div class="blueprint-bottom-btn" (click)="reset()" style="padding: 0; display:inline-block; width: 35%;">
                <i title="change blueprint" class="fa fa-trash-o" aria-hidden="true"></i> reset
            </div>
        </div>
    </div>
    <div class="division-card-content">        
        <ng-content></ng-content>
    </div>
</div>

<select-blueprint 
        *ngIf="blueprint == null"
        [possibleBlueprints]="getPossibleBlueprints()"
        title="select your {{itemType}}"
        [filter]="filter"
        (selected)="selectedBlueprint($event)">
</select-blueprint>

`;