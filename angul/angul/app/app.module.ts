import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { Services } from './Service';
import { AgmCoreModule } from 'angular2-google-maps/core';
@NgModule({
    imports: [BrowserModule, HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDyDfqavLx2jdF8Ii2GceBw9eyCtCA9Qvo'
        })],
    providers: [
       Services
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
