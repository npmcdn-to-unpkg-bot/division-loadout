export const htmlTemplate = `

<item-card
    [cardTitle]="getCardTitle()"
    [editing]="editing"
    [itemType]="itemType"
    [blueprint]="Blueprint"
    (onEditButton)="onEditButton()"
    (onResetButton)="onResetButton()"
    (onBlueprintSelected)="onBlueprintSelected($event)"> 

   <!-- <div class="" style="text-align: center; margin: 5px;">    
        <native-box name="Damage per Second"
                [value]="getDPS()">
        </native-box>
    </div> -->
    
    <div class="" style="text-align: center; margin: 5px;">
        <native-box name="Base Damage"
                [value]="getSumOfAttributeResult('weapon_base_dmg')">
        </native-box>

        <native-box name="SPM"
                [value]="getSumOfAttributeResult('weapon_base_rpm')">
        </native-box>

        <native-box name="Mag"
                [value]="getSumOfAttributeResult('weapon_base_mag')">
        </native-box>
    </div>

   <attributes-selector 
        [max]="item | itemValidation:'max':'weapon_talent'"
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | itemAttributeType:'weapon_talent'">

        <heading>
            <h7 class="edit-header-container">
                Talents
            </h7>
        </heading>

    </attributes-selector>  
   
   <attributes-selector 
        [editing]="editing"
        (changed)="onAttributeChanged($event)"
        (removed)="onAttributeRemoved($event)"
        [attributes]="item | weaponAttributes">

        <heading>
            <h7 class="edit-header-container">
                Native 
            </h7>
        </heading>

    </attributes-selector>  
    
    
    <weapon-attribute
            attributeId="Stability"
            [attributeValue]="getSumOfAttributeResult('weapon_stability')">
    </weapon-attribute>
    <weapon-attribute
            attributeId="Accuracy"
            [attributeValue]="getSumOfAttributeResult('weapon_accuracy')">
    </weapon-attribute>
    <weapon-attribute
            attributeId="Range"
            [attributeValue]="getSumOfAttributeResult('weapon_optimal_range')">
    </weapon-attribute>
    <weapon-attribute
            attributeId="Reload Speed"
            [attributeValue]="getSumOfAttributeResult('weapon_reload_speed')">
    </weapon-attribute>
         
     
      <weapon-mod *ngFor="let slot of (item | weaponMods)"
            (modInserted)="onModInsertGearMod($event)"
            (modRemoved)="onModRemoveGearMod($event)"            
            (modAttributeChanged)="onModAttributeChanged($event)"
            (modAttributeRemoved)="onModAttributeRemoved($event)"
            
            [editing]="editing"
            [modId]="slot.name"
            [modTypes]="slot.slotTypes"
            [mod]="getMod(slot.name)">
      </weapon-mod>
     

</item-card>

`;