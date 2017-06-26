import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginComponent } from './login';
import { PrivateComponent } from './private';
import { NgModule } from '@angular/core';
import { AuthenticationService, User } from './service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
export declare var users: User[];
export declare var constant: boolean ;

@Component({
    moduleId: module.id,
    selector: 'my-app',

    template: `{{today}}
<div *ngIf="sen">fetching data...</div>
<login-form *ngIf="receive" ></login-form>
<router-outlet>hello</router-outlet>
           
        `
})

export class AppComponent implements OnInit, DoCheck {
    public hero: User[];
    today: Date = new Date();
    public receive: boolean;
    public sen: boolean;
    public hide: boolean = false;
    constructor(private http: Http) { console.log("hello");}
    ngOnInit() {
        this.receive = false;
        this.sen = true;
        this.http.get("http://localhost:57445/api/User/GetHeros")
            .map((res: Response) => res.json())
            .subscribe(
            (data: any) => {
                debugger;
                this.hero = data;
                console.log("hello");
                users = this.hero;
                this.receive = true;
                this.sen = false;
               
            });
    }
    ngDoCheck() {
       if(this.hero == undefined) {
            this.receive = false;
            console.log("checking");
        }
        
    }
    //handleUserUpdated(dont: boolean) {
    //    this.hide = dont;

    //}

}