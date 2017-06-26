import { Component,  OnInit,OnDestroy} from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SebmGoogleMap } from 'angular2-google-maps/core';
import { hey, map, count, count1 } from './strucapi';
import { Service } from './service';
import { ButtonModule } from 'primeng/primeng';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
var count2: boolean = true;
import { btn } from './strucapi';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
  
})
export class AppComponent implements OnInit, OnDestroy {
    items: any;
    btn1: btn;
    clicked: boolean = true;
    clicked1: boolean = false;
    clicked2: boolean = false;
    public receive: boolean = false;
    send: boolean = false;
    public hero: map[];
    name: string = "Ringo";
    names: string[] = ["John", "Paul", "George", "Ringo"];
    //public toget: hey = new hey();
    //public cou: number = 0;
    //public heros: hey = new hey();
    //public say: hey;
    //data: any;
    constructor(private serv: Service, private rout: Router, private _cookieService: CookieService) {}
    
    ngOnInit() {
        console.log(this.clicked);
        if (sessionStorage.getItem("usage") == undefined || sessionStorage.getItem("performance") == undefined || sessionStorage.getItem("report") == undefined)
        {
            //debugger;
            //this.setCookie(this.clicked, "usage");
            //this.setCookie(this.clicked1, "performance");
            sessionStorage.setItem("usage", JSON.stringify(this.clicked));
            sessionStorage.setItem("performance", JSON.stringify(this.clicked1));
            sessionStorage.setItem("report", JSON.stringify(this.clicked2));
        }
        else
        {
            //console.log(count);
            debugger;
            this.clicked = JSON.parse(sessionStorage.getItem("usage"));
            this.clicked1 = JSON.parse(sessionStorage.getItem("performance"));
            this.clicked2 = JSON.parse(sessionStorage.getItem("report"));
            //console.log(this._cookieService.get("usage"));
        }
    }
    //Servget(): void {

    //    this.serv.Servget()
    //        .subscribe(
    //        (data: any) => {
    //            debugger;

    //            heroes = data;
    //            this.receive = true;
    //            this.hero = heroes;
    //        });

    //}
    usage() {
        this.rout.navigate(['Usability']);
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
        this.setStorage(this.clicked, "usage");
        this.setStorage(this.clicked1, "performance");
        this.setStorage(this.clicked2, "report");
        //console.log(this.clicked);
    }
    performance() {
        
        this.rout.navigate(['Performance']);
        this.clicked1 = true;
        this.clicked = false;
        this.clicked2 = false;
        this.setStorage(this.clicked, "usage");
        this.setStorage(this.clicked1, "performance");
        this.setStorage(this.clicked2, "report");
        //console.log(this.clicked1);
    }
    report() {
        this.rout.navigate(['Report']);
        this.clicked1 = false;
        this.clicked = false;
        this.clicked2 = true;
        this.setStorage(this.clicked, "usage");
        this.setStorage(this.clicked1, "performance");
        this.setStorage(this.clicked2, "report");
    }
    setStorage(key: boolean, name: string) {
        debugger;
        let c = JSON.stringify(key);
        sessionStorage.setItem(name, c);
        //count2=JSON.parse(this._cookieService.get(name));
        //this.btn1.count = JSON.parse(this._cookieService.get(name));
        //console.log(count);
        //console.log(this.btn1.count);
    }
    ngOnDestroy() {
        console.log("Destroyed");
    }
   
}
  
    //getHeroes() {
    //    this.serv.Servget()
    //        .subscribe(
    //        (data: any) => {
    //            debugger;

    //            this.heroes = data;
    //            console.log(this.heroes);
           
    //        });
    //}
    //addHero(name: string, id: number) {
    //    this.serv.say1 = { Id: id, Name: name };
       
        
    //    this.serv.Servpost();
    //    console.log(name);
       
        
        
    //}

