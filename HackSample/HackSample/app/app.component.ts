import { Component,OnInit } from '@angular/core';
import { ComponentService } from './component.service';
export interface keyValue {
     key: string;
     val: number;
}
@Component({
    moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    clicked: boolean = false;
    dade: Date =new Date();
    sec: any;
    mnth: any = 0;
    see: boolean = false;
    user: string = "";
    key: string[] = [];
    name = 'Angular';
    pair: keyValue[] = [];
    ngOnInit() {
        localStorage.clear();
    }
    constructor(private serv: ComponentService) { }
    check() {
        this.pair = [{ key: "", val: 0 }];
        this.clicked = true;
        debugger;
        let j = JSON.stringify(this.clicked);
        localStorage.setItem(this.user, j);
        this.dade = new Date();
        this.serv.mnth = this.dade.getMinutes();
        this.serv.sec = this.dade.getSeconds();
        localStorage.setItem(this.user + JSON.stringify(this.serv.mnth), JSON.stringify(this.serv.mnth));
        localStorage.setItem(this.user + JSON.stringify(this.serv.sec), JSON.stringify(this.serv.sec));
        setTimeout(() => {
            for (let i = 0; i < localStorage.length; i++) {
                this.pair[i].val = JSON.parse(localStorage.getItem(localStorage.key(i)));
                this.pair[i].key = localStorage.key(i);
            }

        }, 15000);
    }
    show() {
        this.see = true;
        for (let i = 0; i < localStorage.length; i++) {
            this.key[i] = localStorage.key(i);
            
        }
    }
}
