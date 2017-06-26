import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
     <h1>{{title}}</h1>

<button routerLink="/heroes" routerLinkActive= "True">Heroes</button>
<a routerLink="/dashboard" routerLinkActive= "True">Dashboard</a>
    

     <router-outlet></router-outlet>
        
       `
})
export class AppComponent {
    title = 'Tour of Heroes';
    
}
