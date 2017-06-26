import { Component, OnChanges, SimpleChange, OnInit, Input,  DoCheck, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { map, ex } from './strucapi';
import { DatePipe } from '@angular/common';

import { Service } from './service';
import { Message, MenuItem } from 'primeng/primeng';
import { SelectItem, UIChart } from 'primeng/primeng';
export declare var heroes: map[];
import { CookieService } from 'angular2-cookie/core';
declare var google: any;
//declare var tomap: any;
import { MouseEvent, MapsAPILoader, SebmGoogleMapMarker, SebmGoogleMap, SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';
import { ChartService } from './chart.service';
declare var count: boolean;

interface marker {
    lat: number;
    lng: number;
    label: number;
}
@Component({
    moduleId: module.id,
    selector: 'my-maps',
    templateUrl: 'app.maps.html',
    styleUrls: ['app.maps.css']
})
export class AppMaps implements OnInit, DoCheck, AfterViewInit{
    @ViewChild('variab') variab: any;
    @ViewChild('sebm-google-map-marker') marker1: SebmGoogleMapMarker;
    @ViewChild('infowindow') wind: SebmGoogleMapInfoWindow;
    latitude: number;
    drop: map[];
    clicked: boolean = true;
    geocoder: any;
    map_show1: boolean = false;
    map_show: boolean = false;
    map: any;
    tomap: any;
    marker_lat: number[];
    marker_lng: number[];
    dat: Date;
    total1: number=0;
    top1: number=0;
    left1: number=0;
    bottom: number;
    employee_details: number[];
    showmap: boolean = false;
    display: boolean = false;
    show: boolean = true;
    lat12: number;
    lat13: number;
    employee: number[];
    lat1: map[];
    infy: any;
    left: number;
    top: number;
    empid: number;
    bottom1: number=0;
    right: number;
    total: number;
    data: any;
    marker: any;
    length: any;
    cnt: number = 0;
    avg1: boolean = false;
    msgs: string[];
    sample: number[];
    lat2: map[];
    lat3: number = 5;
    avg: boolean = false;
    selected: string;
    lng3: number = 5;
    time: number;
    search: number;
    selected_lat: number;
    selected_region: string;
    public send: boolean = false;
    public receive: boolean = true;
    constructor(private serv: Service, private _cookieService: CookieService, private serve: ChartService, public mapsApiLoader: MapsAPILoader)
    {  }
    ngAfterViewInit() {
      
    }
    ngOnInit() {
        this.marker = ["12","8","20","14","6","11","18","9","25","15","16","19","22"];
        this.employee = [];
        debugger;
       
        if (!sessionStorage.getItem("time")) {
            debugger;
            
            var i = -12;
            this.time = i;
            sessionStorage.setItem("time1", JSON.stringify(i));
            this.serv.ServEstimate(i)
                .subscribe(
                (data: any) => {
                    this.data = data;
                 
                    debugger;
                    this.top = this.data[0];
                    this.left = this.data[1];
                    this.bottom = this.data[2];
                    this.right = this.data[3];
                    this.total = this.top + this.left + this.bottom;
                }
                );
        }
        else {
            debugger;
            this.data = JSON.parse(sessionStorage.getItem("time"));
            this.time = JSON.parse(sessionStorage.getItem("time1"));
            this.top = this.data[0];
            this.left = this.data[1];
            this.bottom = this.data[2];
            this.right = this.data[3];
            this.total = this.top + this.left + this.bottom;
            console.log(this.time);
        }
        if (sessionStorage.getItem("coordinates1") == undefined) {
            debugger;
            this.serve.ServRegion()
            .subscribe(
            (data: any) => {
                this.msgs = data;
                this.serv.golb = this.msgs;
                var address = this.msgs;
                this.receive = true;
                this.send = false;
                this.cnt = 0;
                this.selected = "";
                debugger;
                var marker_lat1: number[];
                var marker_lng1: number[];
                var marker_lats: string[];
                var marker_lngs: string[];
                marker_lat1 = [];
                marker_lng1 = [];
                marker_lats = [];
                marker_lngs = [];
                this.marker_lat = [];
                this.marker_lng = [];
                this.mapsApiLoader.load().then(() => {
                    console.log('google script loaded');
                    this.geocoder = new google.maps.Geocoder();
                    debugger;
                    for (let i = 0; i < this.msgs.length; i++) {
                        //var map1 = new google.maps.Map(document.getElementById('map'),mapOptions);
                        debugger;
                        if (address[i] == "") {
                            continue;
                        }
                        setTimeout(() => {
                           
                            this.geocoder.geocode({ 'address': address[i] }, function (results: any, status: any) {

                                debugger;
                                if (status == google.maps.GeocoderStatus.OK) {
                                    console.log(address[i]);
                                    var marker_lat = results[0].geometry.location.lat();
                                    var marker_lng = results[0].geometry.location.lng();
                                    debugger;
                                    marker_lat1[i] = marker_lat;
                                    marker_lng1[i] = marker_lng;
                                    marker_lats[i] = JSON.stringify(marker_lat1[i]);
                                    marker_lngs[i] = JSON.stringify(marker_lng1[i]);
                                    sessionStorage.setItem("coordinates" + i, marker_lats[i]);
                                    sessionStorage.setItem("coordinates" + i + i, marker_lngs[i]);
                                    console.log(localStorage.getItem("coordinates"+i));

                                    debugger;
                                }

                                debugger;
                            });
                        }, i * 500);
                    }
                    this.marker_lat = marker_lat1;
                    this.marker_lng = marker_lng1;
                    this.serv.lat = marker_lat1;
                });
                this.receive = false;
                this.send = true;
            }
            );
        }
        else {
            debugger;
            var lat: number[];
            lat = [];
            var lng: number[];
            lng = [];
            this.serv.lat = [];
            this.serv.lng = [];
            this.marker_lat = [];
            this.marker_lng = [];
            this.receive = true;
            this.send = false;
           
            var address1=sessionStorage.getItem("address");
            debugger;
            if (this.serv.golb != undefined && address1 != undefined) {
                debugger;
                this.selected = address1;
                var temp = this.serv.golb.findIndex(x => x == address1);
                this.msgs = this.serv.golb;
                this.lat3 = JSON.parse(sessionStorage.getItem("coordinates" + temp));
                this.lng3 = JSON.parse(sessionStorage.getItem("coordinates" + temp + temp));
            }
            else {
                debugger;
                if (address1 != undefined) {
                    this.selected = address1;
                }
                else {
                    this.selected = "";
                }
                this.serve.ServRegion()
                    .subscribe(
                    (data: any) => {
                        this.msgs = data;
                        this.serv.golb = this.msgs;
                    }
                    );
                this.lat3 = 47.4979;
                this.lng3 = 19.0402;
            }
            
            var i = 0;
            for (i = 0; i < 15;i++){
                debugger;
                lat[i] = JSON.parse(sessionStorage.getItem("coordinates" + i));
                lng[i] = JSON.parse(sessionStorage.getItem("coordinates" + i + i));
               
            }
            this.marker_lat = lat;
            this.marker_lng = lng;
            this.serv.lat = lat;
            this.serv.lng = lng;
            this.receive = false;
            this.send = true;
        }
      
        
        debugger;
    }
    
    ngDoCheck() {
       
       }
    update(event: any) {
        var marker: any;
   
        this.send = false;
        debugger;
        var l: any;
        var ln:any;
       
        var map: any;
        this.map_show = true;
        var customMapType;
        debugger;
        var geocoder = new google.maps.Geocoder();
        var address = this.msgs;
        var marker_lat1: number[];
        var marker_lng1: number[];
        var marker_lats: string[];
        var marker_lngs: string[];
        marker_lat1 = [];
        marker_lng1 = [];
        marker_lats = [];
        marker_lngs = [];
        
        var lat14 = this.lat2;

        var address1 = event.target.value;
        console.log(address1);
        sessionStorage.setItem("address", address1);
        debugger;

            var temp = this.serv.golb.findIndex(x => x == address1);
            this.lat3 = JSON.parse(sessionStorage.getItem("coordinates" + temp));
            this.lng3 = JSON.parse(sessionStorage.getItem("coordinates" + temp + temp));
                debugger;
                this.send = true;

       
    }
    
   
    addMarker(lat2: string[]): boolean {
        var marker_lat;
        var h = false;
        var j = 0;
        var marker_lng;
        this.marker_lat = [];
        this.marker_lng = [];
        var geocoder = new google.maps.Geocoder();
        for (let i = 0; i < (lat2.length - 8); i++) {
            var address = lat2[i];
            if (address == "") {
                //this.marker_lat[0] = 0;
                //this.marker_lng[0] = 0;
                //debugger;
                j = i;
            }
            else {
                debugger;
                geocoder.geocode({ 'address': address }, function (results: any, status: any) {

                    debugger;
                    if (status == google.maps.GeocoderStatus.OK) { }
                    marker_lat = results[0].geometry.location.lat();
                    marker_lng = results[0].geometry.location.lng();
                    h = true;
                    debugger;
                    if (h) {
                        this.marker_lat[j] = 0;
                        this.marker_lng[j] = 0;
                        this.marker_lat[i] = marker_lat;
                        this.marker_lng[i] = marker_lng;
                        console.log(this.marker_lat);
                    }
                    debugger;

                });
            }


        }

        return h;


    }
   
    getlatlng(event: MouseEvent, infowindow: any) {
        //debugger;
        //if (this.serv.count > 0) { this.serv.wind.close(); }
        //debugger;
        console.log(event.coords.lat);
        //this.serv.count++;
        //if ((this.serv.count % 2 )== 1){
        //    //this.clicked = false;
        //    //this.wind.isOpen = false;
        //    this.wind.hostMarker.openInfoWindow = false;
        //    this.serv.wind = this.wind;
        //}
        //else {
        //this.clicked = true;
        //this.infy = this.serv.wind;
        if (this.infy && this.infy != infowindow) {
            this.infy.close();
        }
        this.infy = infowindow;
        this.serv.wind = this.infy;
        debugger;
       
        
        debugger;
        this.display = false;
        //this.serv.say1 = 1;

        this.selected_lat = this.serv.lat.findIndex(x => x == event.coords.lat);
        this.selected_region = this.serv.golb[this.selected_lat];
     
        debugger;
       

    }
    closeWindow()
    {
        if (this.infy ){
            this.infy.close();
            this.infy = undefined;
        }
    }

    update1(event: any)
    {
        this.avg = false;
        this.avg1 = false;
        if (this.infy) {
            this.infy.close();
            this.infy = undefined;
        }
        debugger;
        this.show = false;
        var val = event.target.value;
        console.log(val);
        sessionStorage.setItem("time1", JSON.stringify(val));
        this.serv.ServEstimate(val)
            .subscribe(
            (data: any) => {
                this.data = data;
                this.top = this.data[0];
                this.left = this.data[1];
                this.bottom = this.data[2];
                this.right = this.data[3];
                this.total = this.top + this.left + this.bottom;
               
                this.show = true;
                debugger;
                sessionStorage.setItem("time", JSON.stringify(this.data));
            }
            );
    }
    showdetails()
    {
        this.avg = false;
        this.avg1 = false;
        this.employee = [];
        this.serv.ServEstimateDetails(JSON.parse(sessionStorage.getItem("time1")))
            .subscribe(
            (data: any) => {
                this.employee = data;
                this.avg = true;
            }
            );
    }
    update2(event: any) {
        this.avg1 = false;
        this.empid = event.target.value;
        this.employee_details = [];
        this.serv.ServEmployeeDetails(event.target.value)
            .subscribe(
            (data: any) => {
                this.employee_details = data;
                if (this.employee_details.length == 3) {
                    this.top1 = this.employee_details[1];
                    this.left1 = this.employee_details[2];
                    this.bottom1 = this.employee_details[0];
                    this.total1 = this.top1 + this.left1 + this.bottom1;
                }
                else if (this.employee_details.length == 2) {
                    this.top1 = this.employee_details[0];
                    this.left1 = this.employee_details[1];
                    this.bottom1 = 0;
                    this.total1 = this.top1 + this.left1 + this.bottom1;

                }
                else {
                    this.top1 = this.employee_details[0];
                    this.bottom1 = 0;
                    this.left1 = 0;
                    this.total1 = this.top1 + this.left1 + this.bottom1;
                }
                this.avg1 = true;
            }
            );
    }
    showDialog() {
        this.display = true;
    }
    searchList() {
        this.variab = this.search;
    }


}



