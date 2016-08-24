export const htmlTemplate = `

<div class="division-card summary-container row">
    <div class="division-card-content">
        <h3 style="text-align: center;"> Summary </h3>
    
        <div style="margin-bottom: 20px; text-align: center; background-color: #282828; border: 0px solid grey;">
            <div style="  padding: 5px; border-bottom: 0px solid grey;">{{getHealthString()}}</div>
            <!-- <div style="display: inline-block; color: grey;  border-right: 1px solid grey; width: 33%;">Stamina (33%)</div>
            <div style="display: inline-block; color: grey; width: 66%;">Health (67%)</div> -->
        </div>
    
        <div style="margin-bottom: 20px; text-align: center; background-color: #282828; border: 0px solid grey;">
            <div style="padding: 5px; border-bottom: 0px solid grey;">{{getSkillpowerString()}}</div>
            <!-- <div style="display: inline-block; color: grey;  border-right: 1px solid grey; width: 33%;">Electronics (33%)</div>
            <div style="display: inline-block; color: grey; width: 66%;">-</div> -->
        </div>
         
         <div style="margin-bottom: 20px; text-align: center; background-color: #282828; border: 0px solid grey;">
            <div style="  padding: 5px; border-bottom: 0px solid grey;">{{getArmorString()}}</div>
            <!-- <div style="display: inline-block; color: grey;  border-right: 1px solid grey; width: 33%;">-</div>
            <div style="display: inline-block; color: grey; width: 66%;">-</div> -->
        </div>
        
        
        <h4> Primary </h4>
        <ul style="list-style: none; padding-left: 0;">
            <summary-row [attribute]="getSumOfAttribute(attrConsts.FIREARMS)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.STAMINA)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.ELECTRONICS)"></summary-row>
        </ul>
    
        <h4> Offense </h4>
        <ul style="list-style: none; padding-left: 0;">
            <summary-row [attribute]="getSumOfAttribute(attrConsts.CHC)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.CHD)"></summary-row>
        </ul>
        
        <h4> Defense </h4>
        <ul style="list-style: none; padding-left: 0;">
            <summary-row [attribute]="getSumOfAttribute(attrConsts.ARMOR)"></summary-row>
        </ul>
    
        <h4> Resistances </h4>
        <ul style="list-style: none; padding-left: 0;">
            <summary-row [attribute]="getSumOfAttribute(attrConsts.BURN_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.SHOCK_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.DISRUPT_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.DISORIENT_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.BLIND_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(attrConsts.BLEED_RES)"></summary-row>
        </ul>
    
        <h4> Skills </h4>
        <ul style="list-style: none; padding-left: 0;">
            <summary-row [attribute]="getSumOfAttribute(skillConsts.FIRST_AID_ALLY)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.FIRST_AID_SELF)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.PULSE_CHC)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.PULSE_CHD)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.PULSE_DURATION)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.SEEKER_DAMAGE)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.SEEKER_RADIUS)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.SHIELD_HEALTH)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.SMART_DURATION)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.SMARTCOVER_DMG_RES)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.STATION_DURATION)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.STATION_HEALTH)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.STATION_SPEED)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.STICKY_DAMAGE)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.STICKY_RADIUS)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.TURRET_DAMAGE)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.TURRET_DURATION)"></summary-row>
            <summary-row [attribute]="getSumOfAttribute(skillConsts.TURRET_HEALTH)"></summary-row>
        </ul>
    
        <h5> Active Sets </h5>
    
        <h5> Not defined </h5>
        
    </div>
</div>
`;