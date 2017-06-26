import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { PrivateComponent } from './private';
import { AuthenticationService } from './service';
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {
                path: 'Home',
                component: PrivateComponent
            },
            {
                path: 'Login',
                component: LoginComponent
            },
            {
                path: '',
                redirectTo: '/Home',
                pathMatch: 'full'
            }


        ]),],
    declarations: [AppComponent, LoginComponent, PrivateComponent],
    providers: [AuthenticationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
