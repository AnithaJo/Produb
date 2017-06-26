import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService { 
    constructor( private http: Http) { }

    ServgetHeroes(): Observable<any> {
           return this.http.get("http://localhost:56268/api/Hero/GetHeros")
               .map((res: Response) => res.json());
    }
    }
