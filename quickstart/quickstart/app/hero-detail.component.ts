import { Component, Input } from '@angular/core';
//import { hero } from './dashboard.component';
@Component({
    selector: 'my-hero-detail',
template: `
<div>
   
    <input [(ngModel)]="her" placeholder="name"/>

</div>`


})

export class HeroDetailComponent {
    her = 0;
}
