import { Component , OnInit} from '@angular/core';
class map {
    lat: number;
    lng: number;
}
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template:`<h1>{{ title }}</h1>

<!-- this creates a google map on the page with the given lat/lng from -->
<!-- the component as the initial center of the map: -->
<input [(ngModel)]="lat1" >
<button (click)="mapChange()">change</button>
<sebm-google-map  [latitude]="lat" [longitude]="lng">
    <sebm-google-map-marker  *ngFor="let l of lat1" [latitude]="l.lat" [longitude]="l.lng" > </sebm-google-map-marker>
</sebm-google-map>`,
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    lat1: map[] = [{ lat: 55, lng: 4 }, { lat: 49, lng: 6 }, { lat: 53, lng: 7 }]
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    ngOnInit(): void {
        setInterval(() => this.mapChange(),5000);

    }
    mapChange() {
        this.lat1[2].lat += 1;
        this.lat1[2].lng += 1;
    }
}