import { Component, OnChanges, SimpleChange, OnInit, Input, DoCheck, ViewChild } from '@angular/core';
import { map } from '../strucapi';
import { Service } from '../service';
import { Message, MenuItem } from 'primeng/primeng';
import { SelectItem, UIChart } from 'primeng/primeng';
import { p2 } from '../chart/chart';
export class p3 {
    label: string;
    lat: number;
    lng: number;
}