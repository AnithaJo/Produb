//import { Component, ViewChild } from '@angular/core';
//import { ChildComponent } from './child.component';

//@Component({
//    selector: 'my-app',
//    template: `
//    <div>
//        <h1>Parent Component</h1>
//        <button (click)="showHideText()">Show/Hide Child Component Text</button>
//        <child-component></child-component>
//    </div>
//    `
//})

//export class AppComponent {
//    @ViewChild(ChildComponent) private childComponent: ChildComponent;

//    showHideText() {
//        this.childComponent.toggleVisibility('Parent Component');
//    }
//}









import { Component, OnInit, ViewChild  } from '@angular/core';
import { UIChart } from 'primeng/primeng';
@Component({
    selector: 'my-app',
    template: `
    <h1 class=" w3-jumbo fa fa-cloud">saurav</h1><br>
<i class="fa fa-home w3-jumbo"></i>
    <input type="text" pInputText>
    
    <button pButton type="button" label="weapon X" icon="fa-home" iconPos="left" (click)="chart2($event)"></button>
        <button pButton type="button" label="weapon X3" icon="fa-home" iconPos="left" (click)="chart1()"></button>
<p-chart #chart type="line"  [data]="data" (onDataSelect)="selectData($event)" ></p-chart>



`
})



export class AppComponent implements OnInit{
    @ViewChild('chart') chart: UIChart;
    data: any;
    public show: boolean = false;
    charobj: any;
    initial: boolean = false;
    
  

    ngOnInit() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [15, 19, 18, 11, 16, 13, 14],
                    fill: true,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [18, 14, 10, 19, 16, 12, 17],
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'THIRD Dataset',
                    data: [17, 18, 16, 12, 16, 17, 11],
                    fill: false,
                    borderColor: 'green'
                }
            ]
        }
        //setTimeout(() => { this.chart.refresh(); }, 1000);
        
    }
  
    chart1() {
    
        this.data = {
            labels: ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday', 'sunday'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [5, 9, 8, 1, 6, 3, 4],
                    fill: true,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [8, 4, 0, 9, 6, 2, 7],
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'THIRD Dataset',
                    data: [7, 8, 6, 2, 6, 7, 1],
                    fill: false,
                    borderColor: 'green'
                }
            ]
        }
        
        setTimeout(() => {
           this.chart.refresh();
        }, 1000);
        
    }
    }


  //selectData(event: any)
    //{
    //    this.data = {
    //        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //        datasets: [
    //            {
    //                label: 'First Dataset',
    //                data: [5, 9, 8, 1, 6, 3, 4],
    //                fill: true,
    //                borderColor: '#4bc0c0'
    //            },
    //            {
    //                label: 'Second Dataset',
    //                data: [8, 4, 0, 9, 6, 2, 7],
    //                fill: false,
    //                borderColor: '#565656'
    //            },
    //            {
    //                label: 'THIRD Dataset',
    //                data: [7, 8, 6, 2, 6, 7, 1],
    //                fill: false,
    //                borderColor: 'green'
    //            }
    //        ]
    //    }

    //}
    //chart2(event: Event) {
    //    debugger;
    //    this.initial = false;
    //    this.data = {
    //        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //        datasets: [
    //            {
    //                label: 'First Dataset',
    //                data: [15, 19, 18, 11, 16, 13, 14],
    //                fill: true,
    //                borderColor: '#4bc0c0'
    //            },
    //            {
    //                label: 'Second Dataset',
    //                data: [18, 14, 10, 19,16, 12, 17],
    //                fill: false,
    //                borderColor: '#565656'
    //            },
    //            {
    //                label: 'THIRD Dataset',
    //                data: [17, 18, 16, 12, 16, 17, 11],
    //                fill: false,
    //                borderColor: 'green'
    //            }
    //        ]
    //    }
    //    setTimeout(() => {

    //        this.initial = true;
    //    }, 1000);

    //}
