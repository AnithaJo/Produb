import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Report_Parameters, Report_Parameters1 } from './strucapi';
@Injectable()
export class ReportService {
    constructor(private http: Http) { }
    get_allestimates(time: number, tech: string): Observable<any>
    {
        let hey: Report_Parameters = { status:"", time:0, tech:"" };
        hey.status = "";
        hey.time = time;
        hey.tech = tech;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:62107/api/YES_ESTIMATE_COMMON/PostYES_ESTIMATE_COMMON1",hey,options)
            .map((res: Response) => res.json());
    }

    get_monthly(time1: Date,time2:Date, tech: string): Observable<any>
    {
       
        let hey: Report_Parameters1 = { status: "", time1: new Date(),time2:new Date(), tech: "" };
        hey.status = "";
        hey.time1 = time1;
        hey.time2 = time2;
        hey.tech = tech;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:62107/api/YES_ESTIMATE_COMMON/PostYES_ESTIMATE_COMMON2", hey, options)
            .map((res: Response) => res.json());
    }

    ServRegion(): Observable<string[]>
    {
        return this.http.get("http://localhost:62107/api/YES_ESTIMATE_COMMON/GetTechnology")
            .map((res: Response) => res.json());
    }

    get_statusreports(status: string, time: number, tech: string): Observable<any>
    {
        let hey: Report_Parameters = { status: "", time: 0, tech: "" };
        hey.status = status;
        hey.time = time;
        hey.tech = tech;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:62107/api/YES_ESTIMATE_COMMON/PostYES_ESTIMATE_COMMON1", hey, options)
            .map((res: Response) => res.json());
    }
    get_estimatorreports(time: number, tech: string): Observable<any> {
        let hey: Report_Parameters = { status: "", time: 0, tech: "" };
        hey.status = "";
        hey.time = time;
        hey.tech = tech;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:62107/api/YES_ESTIMATE_COMMON/PostYES_ESTIMATE_COMMON3", hey, options)
            .map((res: Response) => res.json());
    }
}