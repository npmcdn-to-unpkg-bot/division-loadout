import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

/**
 * Created by Alex on 16.05.2016.
 */
@Component({
    selector: "page-not-found",
    directives: [],
    providers: [],
    template: 'not found'
})
export class PageNotFoundComponent implements OnInit{
    constructor(private router: Router) {

    }

    ngOnInit() {
        // TODO https://angular.io/docs/ts/latest/guide/router.html#!#default -> useByDefault = coming soon!
        this.router.navigate(['/loadout']);
    }
}