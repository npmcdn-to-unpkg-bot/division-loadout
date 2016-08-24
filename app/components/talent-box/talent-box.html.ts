export const htmlTemplate = `

<ng-content *ngIf="editing && Attributes.length > 0" select="heading"></ng-content>
<span *ngIf="editing && max != null && Attributes.length > 0" style="padding-left: 15px;">{{countSelected()}}/{{max}}</span>
<ul *ngIf="!editing">
    <li *ngFor="let talent of Attributes; let i = index">    
        <div>
            <span class="attr-value">
                {{getAttributeValue(talent)}}
            </span>
            <span class="attr-title">
                {{getAttributeText(talent)}}
            </span>
        </div>
    </li>
</ul>
<ul *ngIf="editing">
    <li *ngFor="let talent of Attributes; let i = index">
        <div>
        
             <possible-item-attribute
                    [single]="max == 1"
                    (onAttributeChanged)="onAttributeChanged($event)"                    
                    [attribute]="talent">
            </possible-item-attribute> 
        </div>
    </li>
</ul>


`;