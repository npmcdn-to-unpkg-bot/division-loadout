export const htmlTemplate = `

<item-card
    [cardTitle]="getCardTitle()"
    [editing]="editing"
    [itemType]="itemType"
    [blueprint]="Blueprint"
    (onEditButton)="onEditButton()"
    (onResetButton)="onResetButton()"
    (onBlueprintSelected)="onBlueprintSelected($event)">
    
    <div class="row" style="text-align: center; ">
        <!-- <native-box
                name="Armor"
                [value]="getSumOfAttributeResult('armor')">
        </native-box>
    
        <native-box
                name="Firearms"
                [value]="getSumOfAttributeResult('firearms')">
        </native-box>
    
        <native-box
                name="Stamina"
                [value]="getSumOfAttributeResult('stamina')">
        </native-box>
    
        <native-box
                name="Electronics"
                [value]="getSumOfAttributeResult('electronics')">
        </native-box> -->
    </div>



    <div *ngIf="isEmpty() && !editing" style="color: white; text-align: center;">
        No attributes selected. Use <i title="edit-mode"
                                       (click)="toggleEditMode()"
                                       class="fa blueprint-header-icon"
                                       [ngClass]="{'fa-pencil-square-o': !editing, 'fa-check-square-o': editing}"
                                       aria-hidden="true"></i> in the bottom of the card to go into edit-mode!
    </div>


    <!-- Set -->
    <attributes-selector
        [max]="item | itemValidation:'max':'set'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'set'">

        <heading>
            <h7 class="edit-header-container">
                Set
            </h7>
        </heading>

    </attributes-selector>
    
    <talent-box 
        [max]="item | itemValidation:'max':'gear_talent'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'gear_talent'">
        
        <heading>
            <h7 class="edit-header-container">
            Talents
            </h7>
        </heading>
    </talent-box>        


    <attributes-selector        
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'native'">

        <heading>
            <h7 class="edit-header-container">
                Native
            </h7>
        </heading>

    </attributes-selector>
    
    <attributes-selector
        [max]="item | itemValidation:'max':'primary'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'primary'">

        <heading>
            <h7 class="edit-header-container">
                Primary
            </h7>
        </heading>

    </attributes-selector>


    <!-- Major Attributes -->
    <attributes-selector
        [max]="item | itemValidation:'max':'major'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'major'">

        <!-- TODO der header könnte auch einfach über die Componente hinzugefügt werdfen und es gibt keinen Grund das über ein ContentChild zu realisieren? -->
        <heading>
            <h7 class="edit-header-container">
               Major 
            </h7>
        </heading>

    </attributes-selector>


    <!-- Minor Attributes -->
    <attributes-selector 
        [max]="item | itemValidation:'max':'minor'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'minor'">

        <heading>
            <h7 class="edit-header-container">
                Minor
            </h7>
        </heading>

    </attributes-selector>


    <!-- Skill Attributes -->
    <attributes-selector
        [max]="item | itemValidation:'max':'skill'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'skill'">

        <heading>
            <h7 class="edit-header-container">
                Skill
            </h7>
        </heading>

    </attributes-selector>
    
     
    <div *ngFor="let slot of (item | itemGearMods)">
        <gear-mod 
            (modInserted)="onModInsertGearMod($event)"
            (modRemoved)="onModRemoveGearMod($event)"            
            (modAttributeChanged)="onModAttributeChanged($event)"
            (modAttributeRemoved)="onModAttributeRemoved($event)"
            
            [editing]="editing"
            [modId]="slot.modId"
            [mod]="item | itemModById:slot.modId">
        </gear-mod>
    </div>
    
</item-card>

`;