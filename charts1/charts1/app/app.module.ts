import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GMapModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { InputTextModule, ChartModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
//import { ChildComponent } from './child.component';
@NgModule({
    imports: [BrowserModule, InputTextModule, ChartModule, ButtonModule, GMapModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }