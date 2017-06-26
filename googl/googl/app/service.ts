import { Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { hey, map,ex } from './strucapi';
import { TreeNode } from 'primeng/primeng';
@Injectable()
export class Service {
    say1: number;
    name: string;
    golb: string[];
    count: number = 0;
    wind: any;
    files: TreeNode[];
    lat: number[];
    lng: number[];
    id: number;
    constructor(private http: Http) { }
    ServMap(): Observable<ex[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });


        let options = new RequestOptions({ headers: headers });

        //let hey1 = this.say1;
        return this.http.post("http://localhost:62107/api/Maps/PostMap1", this.count, options)
            .map((res: Response) => res.json())
        }


    Servpost(): Observable<map[]> {
        console.log(this.say1);
        let headers = new Headers({ 'Content-Type': 'application/json' });


        let options = new RequestOptions({ headers: headers });

        let hey1 = this.say1;
        return this.http.post("http://localhost:62107/api/Maps/PostMap", hey1, options)
         .map((res: Response) => res.json())
        
    }
   

    Servget(): Observable<map[]> {
        return this.http.get("http://localhost:62107/api/Maps/GetMaps")
            .map((res: Response) => res.json());
            
        
    }
    ServEstimate(val: number): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("http://localhost:62107/api/Estimate_Common/PostEstimate_Common",val,options)
            .map((res: Response) => res.json());
    }
    ServEstimateDetails(val: number): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("http://localhost:62107/api/Estimate_Common/PostEstimate_Common1", val, options)
            .map((res: Response) => res.json());
    }
    ServEmployeeDetails(val: number): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("http://localhost:62107/api/Estimate_Common/PostEstimate_Common2", val, options)
            .map((res: Response) => res.json());
    }
}
