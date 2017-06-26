import { Component } from '@angular/core';
import { LoginComponent } from './login';
import { PrivateComponent } from './private';


@Component({
    selector: 'my-app',
    template: `
            <router-outlet></router-outlet>
        `
})

export class AppComponent { }