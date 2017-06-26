import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts';
import { Service } from './service';
import { ChartService } from './chart.service';
import { ReportService } from './report.service';
import { ButtonModule, ChartModule, MessagesModule, GrowlModule, MenuModule, TabMenuModule }from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { DataGridModule, DataTableModule, SharedModule, MultiSelectModule} from 'primeng/primeng';
import { AppMaps } from './app.maps';
import { AppCharts } from './app.charts';
import { AppReport } from './app.report';
import { MakeChart } from './chart/chart';
import { HomeComponent } from './home.component';
import { DropdownModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DataListModule, CalendarModule, TooltipModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule, TabViewModule, FieldsetModule, InplaceModule, SplitButtonModule, DataScrollerModule, OverlayPanelModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CalendarModule,
        BrowserModule,
        CommonModule,
        MessagesModule,
        HttpModule,
        FormsModule,
        ConfirmDialogModule,
        ButtonModule,
        DropdownModule,
        ChartModule,
        DialogModule,
        TooltipModule,
        DataScrollerModule,
        GrowlModule,
        SplitButtonModule,
        MenuModule,
        TabMenuModule,
        DataGridModule,
        SharedModule,
        DataTableModule,
        InplaceModule,
        FieldsetModule,
        TabViewModule,
        OverlayPanelModule,
        DataListModule,
        MultiSelectModule,
        TreeTableModule,
      
        RouterModule.forRoot([
           
            {
                path: 'Usability',
                component: AppMaps
            },
            {
                path: 'Performance',
                component: AppCharts
            },
            {
                path: 'Report',
                component: AppReport
            },
            {
                path: '',
                redirectTo: '/Usability',
                pathMatch: 'full'
            }


        ]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDyDfqavLx2jdF8Ii2GceBw9eyCtCA9Qvo',
            libraries: ["places"]
        })
    ],
    providers: [Service, ChartService, CookieService, ReportService, ConfirmationService],
    declarations: [AppComponent, AppMaps, HomeComponent, AppCharts, MakeChart, AppReport],
    bootstrap: [AppComponent]
})
export class AppModule { }