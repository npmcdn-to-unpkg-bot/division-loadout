# Division-Planner
npm start



// guter überblick
// http://www.sitepoint.com/angular-2-components-inputs-outputs/

// https://auth0.com/blog/2015/09/03/angular2-series-working-with-pipes/

// http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/

https://plnkr.co/edit/oI5dld?p=preview

### Für Remoteanfragen
http://blog.thoughtram.io/angular/2016/01/07/taking-advantage-of-observables-in-angular2-pt2.html
http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

### Optimize Changedetection
http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

Recommended Gear als neue View
- Dort vorgestelltes Gear durch einfachen Klick im Planner "übernehmbar"
- Im gleichen Button könnte man auch eigene Design laden lassen

## Technologys
- Typescript
- Angular 2 (for Typescript)
- Font Awesome
- Bootstrap 4
# Issues with NG2

## CustomEvent bubbling not with EventEmitters
http://plnkr.co/edit/EH28a7O3dfa2cH2Sq3wj?p=preview
https://github.com/angular/angular/issues/2296
Workaround:
this.el.nativeElement.dispatchEvent(new CustomEvent('myCustomEvent', { bubbles: true }));
<div (myCustomEvent)="onEvent(true)">
      <child (myCustomEvent)="onEvent(false)"></child>
</div>

-> log false -> log true

## Problems with ngIf and inside eventHandlers
https://github.com/angular/angular/issues/8261