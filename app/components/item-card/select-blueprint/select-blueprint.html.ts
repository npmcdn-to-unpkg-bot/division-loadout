export const htmlTemplate = `

<div class="division-card item-card filter-blueprint">    
    <div class="division-card-content">
        <div class="blueprint-title"> {{title}} </div>
        <ul>
            <li (click)="selectBlueprint(bp)" *ngFor="let bp of possibleBlueprints ; let i = index" >
                <item-quality
                        [quality]="bp.quality">
                </item-quality>
    
                {{bp.name}}
    
                <span class="pull-right">
                    <span title="Gearscore" >{{bp.gearscore}}</span>
                    <!-- <i title="Community blueprint rating" class="fa fa-star-o" aria-hidden="true"></i> -->
                </span>
            </li>
        </ul>
    </div>
</div>

`;