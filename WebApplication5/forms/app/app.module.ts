import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDyDfqavLx2jdF8Ii2GceBw9eyCtCA9Qvo',
            libraries: ["places"]
        }),

    ],
  declarations: [AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
