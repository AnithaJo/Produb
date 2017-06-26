import { Component, OnInit , Input , Output,  EventEmitter} from '@angular/core';
import { AuthenticationService, User } from './service';
import { NgModule } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { users} from './app.component';
import { Router } from '@angular/router';
import login = require('./global.service');
import { CookieService } from 'angular2-cookie/core';


@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `

        <div *ngIf="loggedIn">
            <div class="title">
                Welcome
            </div>
          
                
                    <div >
                        <input [(ngModel)]="user.email" id="email" 
                             class="validate">
                        <label for="email">Email</label>
                    </div>
          
 
                
                    <div>
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
               
 
                <span>{{errorMsg}}</span>
                <button (click)="login()"  
                    type="submit" name="action">Login</button>
    </div>
    	`
})

export class LoginComponent  {
    //@Input() received: boolean;
    count = 4;
  sen: boolean = false;
    public loggedIn: boolean = true;
   @Output() hide = new EventEmitter();
    public user = new User('', '');
    public errorMsg = '';
    hero: User[];
    public dont: boolean = true;
    constructor(private service: AuthenticationService, private http: Http, private _router: Router, private _cookieService: CookieService) { }
   
    login() {
        
        if (!this.service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
        else {
            this.setCookie("dubey");
            this.getCookie("saurav");
            this.hide.emit(this.dont);
            this.service.logIn = false;
            this.loggedIn = this.service.logIn;
            this._router.navigate(['Home']);
        }
        
    }
    getCookie(key: string) {
       console.log(this._cookieService.get(key));
    }
    setCookie(key: string) {
        let c = JSON.stringify(this.count);
        this._cookieService.put(key, c); 
        console.log(this._cookieService.get(key));
    }
}