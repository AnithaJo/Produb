import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { hey, map, ex, chartdata, SamplePerform, SampleInput } from './strucapi';

@Injectable()
export class ChartService {
    say1: string;
    glodata: any;
    glodata1: any;
    constructor(private http: Http) { }
    Servpost(say1: string): Observable<chartdata[]> {
        console.log(say1);
        let headers = new Headers({ 'Content-Type': 'application/json' });


        let options = new RequestOptions({ headers: headers });

        let hey1 = JSON.stringify(say1);
        return this.http.post("http://localhost:62107/api/YES_Instrumentation/PostYES_Instrumentation1", hey1, options)
            .map((res: Response) => res.json())

    }

    Servch(sam: SampleInput): Observable<SamplePerform[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });


        let options = new RequestOptions({ headers: headers });

        let hey1 = sam;
        return this.http.post("http://localhost:62107/api/Performances/PostChart", hey1, options)
            .map((res: Response) => res.json())
    }
    Servget(): Observable<chartdata[]> {
        return this.http.get("http://localhost:62107/api/YES_Instrumentation/GetYES_Instrumentation1")
            .map((res: Response) => res.json());
    }
    ServRegion(): Observable<string[]> {
        return this.http.get("http://localhost:62107/api/YES_Instrumentation/GetRegion")
            .map((res: Response) => res.json());
    }
}