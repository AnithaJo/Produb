import { Component, Input, OnInit, ViewChild, OnDestroy, Pipe, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { ReportService } from './report.service';
import { serial } from './strucapi';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { DataTableModule, ConfirmationService, MenuItem, SharedModule, Header, Footer, DataTable, SelectItem, MultiSelectModule} from 'primeng/primeng';
@Component({
    moduleId: module.id,
    selector: 'my-report',
    templateUrl: 'app.report.html',
    styleUrls: ['app.report.css'],
    encapsulation: ViewEncapsulation.None

})

export class AppReport implements OnInit{
    data_all: any;
    data_monthly: any;
    data3: any;
    data_estimator: any;
    trial: any;
    serial: serial[];
    techs: string[];
    items: MenuItem[];
    cols_all: any[];
    cols_monthly: any[];
    cols_estimator: any[];
    year_check: boolean = false;
    month_check: boolean = false;
    cases_check: boolean = false;
    tothour_check: boolean = false;
    odrhour_check: boolean = false;
    cph_check: boolean = false;
    allestimates: boolean = true;
    monthlyestimates: boolean = true;
    estimatorestimates: boolean = true;
    columnOptions_all: SelectItem[];
    columnOptions_monthly: SelectItem[];
    columnOptions_estimator: SelectItem[];
    i: number = 0;
    see: boolean = false;
    mydata: any[];
    mycont: boolean = false;
    selected_tech: string = "All";
    selected_report_type: any = "All";
    selected_time_interval: number = -6;
    tech_disabled: boolean = false;
    dateP: Date;
    dateQ: Date;
    constructor(private _report: ReportService, private confirmationService: ConfirmationService, private http: Http) { }
    ngOnInit() {
        this.create_columns();
        this.serial = [];
        //this.http.get("http://localhost:62107/api/FinalTry/GetTry")
        //    .map((res: Response) => res.json())
        //    .subscribe(
        //    (data: any) => {
        //        this.trial = data;
        //        debugger;
        //    }
        //    );
        this.dateP = new Date();
        this.dateQ = new Date();
        this.func_allestimates();
        this._report.ServRegion()
            .subscribe(
            (data: any) => {
                this.techs = data;
                this.see = true;
            }
            );
    }



    //update(event: any) {
    //    console.log(event.target.outerText);
    //    this.data3 = this.data_all.year;
    //    console.log(this.data3);
    //    debugger;
    //    debugger;
    //    switch (event.target.value) {
    //        case '0': this.year_check = !this.year_check;
    //            break;
    //        case '1': this.month_check = !this.month_check;
    //            break;
    //        case "2": this.cases_check = !this.cases_check;
    //            break;
    //        case "3": this.tothour_check = !this.tothour_check;
    //            break;
    //        case '4': this.odrhour_check = !this.odrhour_check;
    //            break;
    //        case '5': this.cph_check = !this.cph_check;
    //            break;
    //        case '7': this.year_check = false;
    //            this.month_check = false;
    //            this.cases_check = false;
    //            this.tothour_check = false;
    //            this.odrhour_check = false;
    //            this.cph_check = false;
    //            break;
    //        default: this.year_check = this.year_check;
    //            this.month_check = this.month_check;
    //            this.cases_check = this.cases_check;
    //            this.tothour_check = this.tothour_check;
    //            this.odrhour_check = this.odrhour_check;
    //            this.cph_check = this.cph_check;
    //            break;
    //    }
        
    //}
    generate_report() {
        //console.log(this.selected_report_type);
        //console.log(this.selected_tech);
        //console.log(this.selected_time_interval);
        switch (this.selected_report_type) {
            case 'All':
                this.func_allestimates();
                break;
            case 'IPRG':
                this.func_statusreports();
                break;
            case 'COM':
                this.func_statusreports();
                break;
            case 'ISS':
                this.func_statusreports();
                break;
            case 'monthly_report':
                this.func_monthlyreport();
                break;
            case 'estimator_report':
                this.func_estimatorreport();
                break;
        }
    }

    func_allestimates() {
        this._report.get_allestimates(this.selected_time_interval, this.selected_tech)
            .subscribe(
            (data: any) => {
                this.data_all = data;
                for (let i = 0; i < this.data_all.length; i++) {
                    if (this.data_all[i].DISPLAY_NM.search(',') != -1) {
                        var str1 = this.data_all[i].DISPLAY_NM.split(',');
                        this.data_all[i].DISPLAY_NM = str1[1] + " " + str1[0];
                    }
                    if (this.data_all[i].LOCATION_NM.search(',') != -1) {
                        var str = this.data_all[i].LOCATION_NM.split(',');
                        this.data_all[i].LOCATION_NM = str[0] + str[1];
                    }
                    if (this.data_all[i].CUSTOMER_NM.search(',') != -1) {
                        var str = this.data_all[i].CUSTOMER_NM.split(',');
                        this.data_all[i].CUSTOMER_NM = str[0] + str[1];
                    }
                }
                debugger;
                this.allestimates = false;
                this.monthlyestimates = true;
                this.estimatorestimates = true;
            }
            );
    }
    func_statusreports() {
        this._report.get_statusreports(this.selected_report_type, this.selected_time_interval, this.selected_tech)
            .subscribe(
            (data: any) => {
                this.data_all = data;
                for (let i = 0; i < this.data_all.length; i++) {
                    if (this.data_all[i].DISPLAY_NM.search(',') != -1) {
                        var str1 = this.data_all[i].DISPLAY_NM.split(',');
                        this.data_all[i].DISPLAY_NM = str1[1] + " " + str1[0];
                    }
                    if (this.data_all[i].LOCATION_NM.search(',') != -1) {
                        var str = this.data_all[i].LOCATION_NM.split(',');
                        this.data_all[i].LOCATION_NM = str[0] + str[1];
                    }
                    if (this.data_all[i].CUSTOMER_NM.search(',') != -1) {
                        var str = this.data_all[i].CUSTOMER_NM.split(',');
                        this.data_all[i].CUSTOMER_NM = str[0] + str[1];
                    }
                }
                debugger;
                this.allestimates = false;
                this.monthlyestimates = true;
                this.estimatorestimates = true;
            }
            );
    }
    func_monthlyreport() {
        this._report.get_monthly(this.dateP, this.dateQ, this.selected_tech)
            .subscribe(
            (data: any) => {
                this.data_monthly = data;
                this.allestimates = true;
                this.monthlyestimates = false;
                this.estimatorestimates = true;
            }
            );
    }
    func_estimatorreport() {
        this._report.get_estimatorreports(this.selected_time_interval, this.selected_tech)
            .subscribe(
            (data: any) => {
                this.data_estimator = data;
                for (let i = 0; i < this.data_estimator.length; i++) {
                    if (this.data_estimator[i].DISPLAY_NM.search(',') != -1) {
                        var str = this.data_estimator[i].DISPLAY_NM.split(',')
                        this.data_estimator[i].DISPLAY_NM = str[1] + " " + str[0];
                    };

                }
                this.allestimates = true;
                this.monthlyestimates = true;
                this.estimatorestimates = false;
            }
            );
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'Report Type -' + this.selected_report_type + '\n' + 'Technology -' + this.selected_tech + '\n' + 'Time Interval' + this.selected_time_interval,
            header:'CONFIRMATION',
            accept: () => {
                this.generate_report();
            }
        });
    }
    create_columns() {
        this.cols_all = [
            { field: 'CREATED_ON_Date', header: 'DATE CREATED' },
            { field: 'CUSTOMER_NM', header: 'Customer Name' },
            { field: 'DISPLAY_NM', header: 'Estimator Name' },
            { field: 'ESTIMATE_ID_SQ', header: 'Estimate ID' },
            { field: 'LAST_UPDATED', header: 'Last Updated' },
            { field: 'LOCATION_NM', header: 'Location' },
            { field: 'REQUEST_ESTIMATE_STATUS_CD', header: 'Estimate Status' },
            { field: 'PURPOSE_CD', header: 'Purpose' }

        ];

        this.columnOptions_all = [];
        for (let i = 0; i < this.cols_all.length; i++) {
            this.columnOptions_all.push({ label: this.cols_all[i].header, value: this.cols_all[i] });
        };

        this.cols_monthly = [
            {field: 'year', header: 'Year' },
            { field: 'month', header: 'Month' },
            { field: 'cases', header: 'Cases' },
            { field: 'total_hours', header: 'Estimated Hours' },
            { field: 'other_hours' , header: 'Other Hours' },
            { field: 'average' , header : 'Cases per hour'}
        ];
        this.columnOptions_monthly = [];
        for (let i = 0; i < this.cols_monthly.length; i++) {
            this.columnOptions_monthly.push({ label: this.cols_monthly[i].header, value: this.cols_monthly[i] });
        };

        this.cols_estimator = [
            { field: 'DISPLAY_NM', header: 'Estimator' },
            { field: 'cases', header: 'Cases' },
            { field: 'estimated_hours', header: 'Estimated Hours' },
            { field: 'other_hours', header: 'Other Hours' },
            { field: 'total_hours', header: 'Total hours' }
        ];
        this.columnOptions_estimator = [];
        setTimeout(() => {
            for (let i = 0; i < this.cols_estimator.length; i++) {
                this.columnOptions_estimator.push({ label: this.cols_estimator[i].header, value: this.cols_estimator[i] });
            };
        },100);
    }
    selectInterval(event: any) {
        let dateex = new Date();
        
        let mnth = dateex.getMonth();
        let yr = dateex.getFullYear();
        let mnth1 = event.target.value;
       
        let y = -1 * mnth1;
   
            

            if ((y / 12) > 1)
            {
                
                dateex = this.yearChange(dateex, mnth, y / 12);
                this.dateP = dateex;
         }
            else
            {
                let diff = mnth - y;
                if (diff >=  0)
                {
                    this.dateP = this.monthChange(dateex, diff);
                    debugger;
                }
                else
                {
                    dateex = this.yearChange(dateex, 11, 1);
                    let a = 12 + diff;
                    this.dateP = this.monthChange(dateex, a);
                }
            }


        //switch (mnth1) {
        //    case "1 month": let x = mnth - 1;
        //        break;
            //}
            console.log(this.dateP);

    }

    yearChange(dateex: any, mnth: any, year:any): Date
    {

        let yr = dateex.getFullYear();
        yr = yr - year;
         
            dateex.setFullYear(yr, mnth);
            return dateex;
    }
    monthChange(dateex: Date, diff: any): Date
    {
        dateex.setMonth(diff);
        return dateex;

    }

}