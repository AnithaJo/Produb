import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { HeroService } from './hero.service';
//import { hero } from './dashboard.component';

@Component({
    selector: 'my-heroes',
    template: `
  <h2>My Heroes</h2>
    <input [(ngModel)]="her" placeholder="name"/>

`,
 
    providers: [HeroService]

})
export class HeroesComponent implements OnInit {
    her: number = 0;
    ngOnInit(): void {
      
    }
   
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
                ) { }
    
   
    //getHeroes(): void {
    //    this.heroService.GetHerosApi()
    //        .subscribe(
    //        (data: any) => {
    //            debugger;
    //            this.heros = data;
    //        },
    //    )
    }


        

        //selectedHero: Hero;
        //onSelect(hero: Hero): void {
        //    this.selectedHero = hero;
        //}

