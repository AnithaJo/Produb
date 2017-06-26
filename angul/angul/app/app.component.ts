import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Services } from './Service';
import { Observable } from 'rxjs/Rx';

export interface example {
    name: string;
    phone: number;

}

@Component({
    selector: 'my-app',
    template: `
  <h1>Angular2 HTTP Demo App</h1>
  <h2 *ngFor="let hero of heroes">{{hero}}</h2>
<h2 *ngFor="let her of heros">{{her.name}} {{her.phone}}</h2>
<label>New hero name: <input #newHeroName /></label>
<button (click)="addHero(newHeroName.value); newHeroName.value=''">Add Hero</button> 
<sebm-google-map [latitude]="lat" [longitude]="lng" (mapClick)="mapClicked($event)">
        <h2>saurav</h2>
       <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
    </sebm-google-map>
`,
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    heroes: string[];
    lat: number = 51.678418;
    lng: number = 7.809007;
    heros: example[];
    i: number = 0;
    mode = 'Observable';
    constructor(private services: Services, private http: Http) { }

    ngOnInit(): void {

        
        this.getHeroes();
    }

    getHeroes() {
        this.services.ServgetHeroes()

            .subscribe(
            (data: any) => {


                this.heroes = data;
                console.log(this.heroes);
            });
    }
    addHero(name: string) {
     
       
        console.log(name);
        this.services.addHero(name)
            .subscribe(
            (data: any) => {
               
                this.heros = data;
                console.log(name);
                console.log(this.heros);
                

            })
        
            
    }

}