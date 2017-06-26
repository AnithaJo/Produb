import { Component, OnInit, NgModule } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//export declare var hero: number;


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    heroes: any;
    hero: number[] = [1,2,3,4,5,6,7,8,9];
    constructor(private heroService: HeroService, private http: Http) { }

    ngOnInit(): void {
        //this.heroService.GetHerosApi()
        //    .subscribe(
        //    (data: any) => {
        //        debugger;
        //        this.heroes = data;
        //    },
        //)
        
        this.getHeroes();
        //setInterval(() => this.sendHero(), 3000);
    }

   getHeroes() {
       this.heroService.ServgetHeroes()
          .subscribe(
         (data: any) => {
    debugger;
    console.log(data);
    this.heroes = data;
    console.log(this.heroes);
            })
    }
   sendHero() {
       this.hero[5] += 1;
   }

    //ServgetHeroes(): Promise<Hero[]> {
    //    return this.http.get("http://localhost:56268/api/Hero/GetHeros")
    //        .toPromise()
    //        .then(this.extractData)
    //        //.catch(this.handleError);
    //}

    //private extractData(res: Response) {
    //    let body = res.json();
    //    return body.data || {};
    //}
}

