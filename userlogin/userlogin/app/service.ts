import { Injectable,EventEmitter,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './app.component';
export class User {
    constructor(
        public email: string,
        public password: string) { }
}

//var users = [
//    new User('admin@admin.com', 'adm9'),
//    new User('user1@gmail.com', 'a23'),
//    new User('saurav@gmail.com', '123qwe')
//];

@Injectable()
export class AuthenticationService {
    public flag: boolean = false;
    onDestroyEvent: EventEmitter<string> = new EventEmitter();
    public logIn: boolean;
    constructor(private _router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
       
    }

    login(user: User) {
        this.flag = false;
        for (let i = 0; i < users.length; i++) {
            if ((users[i].email === user.email) && (users[i].password === user.password)) {

                localStorage.setItem("user", users[i].email);
                this._router.navigate(['Home']);
                this.flag = true;
                return true;

            }
        }
        //var authenticatedUser = users.find(u => u.email === user.email);
        //if (authenticatedUser && authenticatedUser.password === user.password) {
        //    localStorage.setItem("user", authenticatedUser);
        //    this._router.navigate(['Home']);
        //    return true;
        //}
        if (!this.flag)
            return false;

    }

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['Login']);
        }
    }

}