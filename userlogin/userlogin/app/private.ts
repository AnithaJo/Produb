import { Component, Input, OnInit, DoCheck,OnDestroy} from '@angular/core';
import { AuthenticationService } from './service';
import { NgModule } from '@angular/core';
import { users } from './app.component';
import { User } from './service';
@Component({
    selector: 'login-form1',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                   
                    <a (click)="logout()" href="#">Click Here to logout</a>
    
                </div>
            </div>
    	`
})

export class PrivateComponent implements OnInit, OnDestroy {
   
    num: number = 0;
    //public check: User[] = users;
    constructor(
        private _service: AuthenticationService) { }
    //ngDoCheck() {
    //    if (this.check !== this.doc)
    //        this.check = this.doc;
    //    console.log("private");
    //}
    ngOnInit() {
        this._service.checkCredentials();
     
        console.log("hello");
        
    }

    logout() {
        this._service.logout();
    }
    ngOnDestroy() {
        console.log('component destroyed');
    }
    //select() {
    //    this.num += 1;
    //}
}