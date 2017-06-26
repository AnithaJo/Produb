import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions, RequestMethod, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { example } from './app.component';

@Injectable()
export class Services {
    constructor(private http: Http) { }

    ServgetHeroes(): Observable<any> {
        return this.http.get("http://localhost:59351/api/Hello/NewHeros")
            .map((res: Response) => res.json());
    }
    addHero(name: string): Observable<example> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let hey = JSON.stringify(name);
        return this.http.post("http://localhost:59351/api/Hello/GetHeros", hey, options)
            .map((res: Response) => res.json());
           
    }
}
