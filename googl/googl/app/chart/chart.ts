import { Component, OnChanges, SimpleChange, OnInit, Input, DoCheck, ViewChild } from '@angular/core';
import { map} from '../strucapi';
import { Service } from '../service';
import { Message, MenuItem } from 'primeng/primeng';
import { SelectItem, UIChart } from 'primeng/primeng';
import { p3 } from '../select/option';
import { heroes} from '../app.maps';
export class p2 {
    label: string;
    lat: number;
    lng: number;
}
@Component({
    moduleId: module.id,
    selector: 'chart',
    templateUrl: 'chart.html'
})
export class MakeChart {
    @Input() data1: any;
    count = 0;
    drop: map[];
    display: boolean = false;
    show: boolean = true;

    lat1: map[] = heroes;
    data: any;

    length: any;
    cnt: number = 0;
    msgs: Message[];
    sample: number[];
    lat2: string[];
    lat: number = 5;
    lng: number = 5;
    public send: boolean = false;
    public receive: boolean = true;
    constructor(private serv: Service) { }
    


    selectData(event: any) {
        this.msgs = [];
        this.length = this.data.labels[event.element._index];
        console.log(this.length);
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: this.data.datasets[event.element._datasetIndex].data[event.element._index] });


    }
    //refresh() {

    //    this.show = false;

    //    this.data = {
    //        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    //        datasets: [
    //            {
    //                label: 'First Dataset',
    //                data: [10, 12, 14, 11, 16, 18, 19],
    //                fill: true,
    //                borderColor: '#4bc0c0'
    //            },
    //            {
    //                label: 'Second Dataset',
    //                data: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    //                fill: true,
    //                borderColor: '#565656'
    //            },
    //            {
    //                label: 'THIRD Dataset',
    //                data: [17, 18, 16, 12, 16, 17, 11],
    //                fill: true,
    //                borderColor: 'green'
    //            }
    //        ]
    //    }
    //    setTimeout(() => {

    //        this.show = true;
    //    }, 1000);

    //}
}