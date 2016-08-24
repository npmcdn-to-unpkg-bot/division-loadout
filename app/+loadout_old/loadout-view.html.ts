export const htmlTemplate = `

<div class="container-fluid">
    <div class="row">
        <div class="weapons-container col-md-4 col-lg-3">        
            <!-- Weapon container -->
           <!-- <div class="row division-card-category">
                <div class="col-md-12">
                    <i (click)="showWeapons = !showWeapons" class="fa fa-caret-down fa-border division-category-icon hidden-sm-up" aria-hidden="true"></i>
                    <i (click)="addWeaponCard()" class="fa fa-plus fa-border division-category-icon" aria-hidden="true"></i>
                    <i (click)="toggleSearchWeapons()" class="fa fa-search division-category-icon" aria-hidden="true"></i>

                    <input type="text"
                           *ngIf="searchWeapons"
                           class="filter-blueprint-input"
                           [(ngModel)]="filterWeapons"
                           placeholder="search weapons ..." />

                    <h2 (click)="searchWeapons = !searchWeapons" *ngIf="!searchWeapons" class="division-category-text"> Weapons </h2>
                 </div>
            </div> -->

            <weapon-item  [itemId]="weaponOneId" *ngIf="showWeapons"
                        [item]="weaponOneItem | async"
                        itemType="primary" 
                        [filter]="filterWeapons"                         
                        (action)="onAction($event)">                    
            </weapon-item>

            <weapon-item [itemId]="weaponTwoId" *ngIf="showWeapons"
                        [item]="weaponTwoItem | async"
                        itemType="primary" 
                        [filter]="filterWeapons"                         
                        (action)="onAction($event)">                    
            </weapon-item>

        </div>
        <div class="gear-container col-md-4 col-lg-6">
            <!-- gear container -->
            <!-- <div class="row division-card-category">
                <div class="col-md-12">
                    <i (click)="showGear = !showGear" class="fa fa-caret-down fa-border division-category-icon hidden-sm-up" aria-hidden="true"></i>
                    <i (click)="toggleSearchGear()" class="fa fa-search division-category-icon" aria-hidden="true"></i>

                    <input type="text"
                           *ngIf="searchGear"
                           class="filter-blueprint-input"
                           [(ngModel)]="filterGear"
                           placeholder="search gear ..." />
                    <h2 (click)="searchGear = !searchGear" *ngIf="!searchGear" class="division-category-text"> Equipped Gear </h2>
                </div>
            </div> -->

            <div class="row">
                <div *ngIf="showGear" class="col-md-12 col-lg-6">
    
                    <gear-item (action)="onAction($event)" [itemId]="armorId" itemType="body" [filter]="filterGear" [item]="armorItem | async"></gear-item>
                    <gear-item (action)="onAction($event)" [itemId]="maskId" itemType="mask" [filter]="filterGear" [item]="maskItem | async"></gear-item>
                    <gear-item (action)="onAction($event)" [itemId]="kneepadId" itemType="kneepads"[filter]="filterGear" [item]="kneepadItem | async"></gear-item>
    
                </div>
                <div *ngIf="showGear" class="col-md-12 col-lg-6">
    
                    <gear-item [itemId]="backpackId"
                        [item]="backpackItem | async"
                        itemType="backpack" 
                        [filter]="filterGear"                         
                        (action)="onAction($event)">                    
                    </gear-item>
                    <gear-item (action)="onAction($event)" [itemId]="glovesId" itemType="gloves" [filter]="filterGear" [item]="glovesItem | async"></gear-item>
                    <gear-item (action)="onAction($event)" [itemId]="holsterId" itemType="holster" [filter]="filterGear" [item]="holsterItem | async"></gear-item>
    
                </div>
            </div>
        </div>

        <div class="col-md-4 col-lg-3">
            <!-- <div class="row division-card-category">
                <div class="col-md-12">
                    <i (click)="showSummary = !showSummary" class="fa fa-caret-down fa-border division-category-icon hidden-sm-up" aria-hidden="true"></i>
                    <i (click)="toggleSearchSummary()" class="fa fa-search division-category-icon" aria-hidden="true"></i>

                    <input type="text"
                           *ngIf="searchSummary"
                           class="filter-blueprint-input"
                           [(ngModel)]="filterSummary"
                           placeholder="search summary stats ..." />

                    <h2 (click)="searchSummary = !searchSummary" *ngIf="!searchSummary" class="division-category-text"> Summary </h2>
                </div>
            </div> -->
            <summary *ngIf="showSummary"
                    [items]="items | async">
            </summary>
        </div>






    </div>
</div>
`;