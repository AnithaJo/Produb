import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { PrivateComponent } from './private';
import { AuthenticationService } from './service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Logcomponent } from './dummy.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

const routes: Routes = [
    {
        path: 'Home',
        component: PrivateComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'start',
        component: Logcomponent
    },
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    }

];
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(routes)],
    declarations: [AppComponent, LoginComponent, PrivateComponent, Logcomponent],
    providers: [AuthenticationService, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
