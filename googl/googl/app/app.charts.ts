import { Component, Input, OnInit, ViewChild, OnDestroy, Pipe, ElementRef, AfterViewInit} from '@angular/core';
import { Message, MenuItem, UIChart } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { hey, map, chartdata, SamplePerform, SampleInput, detail, detail1 } from './strucapi';
import { Service } from './service';
import { ChartService } from './chart.service';
import { heroes } from './app.maps';
import { SelectItem,TreeNode } from 'primeng/primeng';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import { Header} from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/core';
//import globdata = require('./strucpi');
import { DataListModule } from 'primeng/primeng';
declare var Chart: any;
@Component({
    moduleId: module.id,
    selector: 'my-charts',
    templateUrl: 'app.charts.html',
    styleUrls: ['app.charts.css']
 
})

export class AppCharts implements OnInit, AfterViewInit{
    @ViewChild('myChart') donut: ElementRef;
    data: any;
    chacha: boolean = false;
    public address: Object;
    sam: SampleInput;
    dataTab: SamplePerform[];
    tech_name: string;
    files: TreeNode[];
    save: number[];
    selected: string;
    open: number[];
    average: number[];
    calc: number[];
    save_avg: number;
    open_avg: number;
    calc_avg: number;
    regn: boolean = true;
    reg: string[];
    data1: map[];
    drop: chartdata[];
    drop1: chartdata[];
    receive: boolean = true;
    send: boolean = false;
    display: boolean = false;
    i: number;
    length: any;
    avg: boolean = false;
    options: number[];
    msgs: Message[];
    sample: number[];
    cities: SelectItem[];
    displayDialog: boolean;
    cars: detail[];
    sau: hey[];
    option: any;
    el: any;
    myChart: any;
    constructor(private serv: ChartService, private serve: Service, private _cookieService: CookieService, element: ElementRef) {
        this.el = element.nativeElement;
        console.log(this.donut);
    }
    ngAfterViewInit() {
        
        debugger;
    
    }
    ngOnInit() {
   
        console.log("hello");
        this.files = [];
        //this.cities = [];
        //this.cities.push({ label: 'Select City', value: null });
        //this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        //this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        //this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });

        this.serv.ServRegion().subscribe((data: any) => {
            this.reg = data;
        }
        );

        if (sessionStorage.getItem("tech") == undefined || JSON.parse(sessionStorage.getItem("tech")) == "All") {
            let f = "All";
            let d = JSON.stringify(f);
            sessionStorage.setItem("selected", d);
            this.selected = JSON.parse(sessionStorage.getItem("selected"));

            if (this.serv.glodata != null) {
                this.drop = this.serv.glodata;
                this.tech_name = "All";
                this.updatechart(this.drop);
                this.send = true;
                this.receive = false;
            }
            else {
                this.serv.Servget()
                    .subscribe(
                    (data: any) => {
                        debugger;

                        this.drop = data;
                        this.serv.glodata = data;
                        this.receive = true;
                        if (this.receive) {
                            this.tech_name = "All";
                            this.updatechart(this.drop);

                        }
                        this.send = true;
                        this.receive = false;
                    });
            }

        }
        else {
            this.send = false;

            this.tech_name = JSON.parse(sessionStorage.getItem("tech"));
            this.selected = JSON.parse(sessionStorage.getItem("selected"));
            console.log(this.selected);
            console.log(this.tech_name);
            if (this.serv.glodata1 != null) {
                this.drop = this.serv.glodata1;
                this.receive = true;             
                this.updatechart(this.drop);
                this.send = true;
                this.receive = false;
            }
            else{
            this.serv.Servpost(this.tech_name).subscribe((data: any) => {
                this.drop = data;
                this.receive = true;
                this.serv.glodata1 = data;
                this.updatechart(this.drop);
                this.send = true;
                this.receive = false;
            }
            );
        }
        }
    }
     
    //Creating Chart based on Technology
     update(event: any) {
         console.log(event);
         this.display = false;
         this.avg = false;
         //this.display = false;
         this.tech_name = event.target.value;
         let c = JSON.stringify(this.tech_name);
         sessionStorage.setItem("tech", c);
         sessionStorage.setItem("selected", c);
         this.chacha = false;
         if (this.tech_name == "All") {
             this.serv.Servget()
                 .subscribe(
                 (data: any) => {
                     this.drop = data;
                     this.updatechart(this.drop);
                 }
                 );
         }
         else {
             this.serv.Servpost(this.tech_name)
                 .subscribe(
                 (data: any) => {

                     this.drop = data;
                     //this.toget = JSON.parse(this.heros);
                     this.updatechart(this.drop);

                     //this.display = true;
                     //count += count;
                     //this.cnt = count;
                 }
                 );
         }
         

     }
    //Chart Details
     selectData(event: any) {
         this.sau = [
             {
                 Name: "",
                 Id:0
             }
         ];
         this.avg = false;
         this.display = false;
         this.msgs = [];
         this.cars = [
             {
                 selected_region: "",
                 selected_operation: "",
                 selected_tech: "",
                 Average_Time: 0,
                 sau:
                 [
                     {
                         Name: "",
                         Id: 0
                     },
                     {
                         Name: "q",
                         Id: 1
                     }
                 ]
             }
         ];
         this.sam = { Region: "", Operation_name: "" };
         if (this.data.datasets[event.element._datasetIndex].label == "Average") {
             this.cars[0].selected_region = this.data.labels[event.element._index];
             //this.cars[0].selected_operation = this.data.datasets[event.element._datasetIndex].label;
             this.cars[0].selected_tech = JSON.parse(sessionStorage.getItem("selected"));
             this.cars[0].Average_Time = this.data.datasets[event.element._datasetIndex].data[event.element._index];
             setTimeout(() => { this.avg = true; }, 100);
            
         }
         else {
             this.sam.Region = this.data.labels[event.element._index];
             this.sam.Operation_name = this.data.datasets[event.element._datasetIndex].label;
             this.cars[0].selected_region = this.data.labels[event.element._index];
             this.cars[0].selected_operation = this.data.datasets[event.element._datasetIndex].label;
             this.cars[0].selected_tech = JSON.parse(sessionStorage.getItem("selected"));
             this.cars[0].Average_Time = this.data.datasets[event.element._datasetIndex].data[event.element._index];
             let i = 0;
             let j = 0;
             while (i < 3) {
                 if (this.data.datasets[i].label != this.data.datasets[event.element._datasetIndex].label) {
                     this.cars[0].sau[j].Name = this.data.datasets[i].label;
                     this.cars[0].sau[j].Id = this.data.datasets[i].data[event.element._index];
                     j++;
                    
                     
                 }
                 i++;
                 console.log(this.cars[0].sau);
             }
             this.msgs.push({ severity: 'info', summary: 'Info Message', detail: this.data.datasets[event.element._datasetIndex].data[event.element._index] });
             setTimeout(() => { this.display = true;  }, 100);
             
             //this.serv.Servch(this.sam)
             //    .subscribe(
             //    (data: any) => {
             //        this.dataTab = data;
             //        this.display = true;
             //    }
             //        );
         }
     }
    //updating the chart and bottom datatable 
     updatechart(drop: chartdata[]) {
         this.save = [];
         this.open = [];
         this.calc = [];
         this.save_avg = 0;
         this.open_avg = 0;
         this.calc_avg = 0;
         this.average = [];
         this.regn = false;
         
         for (let i = 0; i < drop.length; i++) {
             this.save[i] = Math.round(drop[i].sum1[2] * 100)/100;
             this.open[i] = Math.round(drop[i].sum1[1] * 100) / 100;
             this.calc[i] = Math.round(drop[i].sum1[0] * 100)/100;
             this.average[i] = Math.round(((this.save[i] + this.open[i] + this.calc[i]) / 3) * 100)/100;
             this.save_avg += this.save[i];
             this.open_avg += this.open[i];
             this.calc_avg += this.calc[i];
         }
         this.save_avg = Math.round((this.save_avg / drop.length) * 100) / 100;
         this.open_avg = Math.round((this.open_avg / drop.length) * 100) / 100;
         this.calc_avg = Math.round((this.calc_avg / drop.length) * 100) / 100;
         console.log(this.save_avg);
         console.log(this.open_avg);
         console.log(this.calc_avg);
         this.files = [
             {

                 data:
                 {
                     Operation: "Save",
                     Technology: this.tech_name,
                     Time: this.save_avg
                 }
             },
             {
                 data:
                 {
                     Operation: "Open",
                     Technology: this.tech_name,
                     Time: this.open_avg
                 }
             },
             {
                 data:
                 {
                     Operation: "Landing",
                     Technology: this.tech_name,
                     Time: this.calc_avg
                 }
             }

         ]


         this.data = {
             labels: this.reg,
             datasets: [
                 {
                     label: 'Landing',
                    
                     data: this.save,
                     fill: false,
                     borderColor: '#07FF2E',
                     lineTension: 0.5,
                     pointRadius:5
                 },
                 {
                     label: 'Open',
                     data: this.open,
                     fill: false,
                     borderColor: '#ff3333',
                     lineTension: 0.5,
                     pointRadius: 5
                 },
                 {
                     label: 'Get',
                     data: this.calc,
                     fill: false,
                     borderColor: '#345AFF',
                     lineTension: 0.5,
                     pointRadius: 5
                 },
                 {
                     label: 'Average',
                     data: this.average,
                     fill: true,
                     borderColor: 'black',
                     lineTension: 0.5,
                     pointRadius: 5
                 }
             ]

         }
         this.option = {
             responsive: false,
             maintainAspectRatio: false,
             legend: {
                 labels: { usePointStyle: true },
                 position:'right'
             },
             tooltips: {
                 mode: 'index',
                 intersect: false,
                 position:'nearest'
             },
             hover: {
                 mode: 'nearest',
                 intersect: true
             },
             scales: {
               
                 yAxes: [{
                     scaleLabel: {
                         display: true,
                         labelString: 'TIME (sec)'
                     },
                     gridLines: {
                         display: false
                     },
                     ticks: {
                         fixedStepSize: 5
                     }
                 }],
                 xAxes: [{
                     scaleLabel: {
                         display: true,
                         labelString: 'REGION'
                     },
                     ticks: {
                         autoSkip:false
                     }
                 }]
             }
             
             
         };
        
         this.regn = true;
         this.chacha = true;
     }
     
}



