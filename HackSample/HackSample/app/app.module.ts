import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentService } from './component.service';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule,
        CommonModule,
        FormsModule],
    providers: [ComponentService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
