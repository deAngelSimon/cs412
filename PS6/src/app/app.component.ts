import { Component, OnInit } from '@angular/core';
import {DAY} from './mockData/dataType';
import {TIMEPERIOD} from './mockData/playerArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  // title = 'PS6';
  D1: DAY[] = TIMEPERIOD;
  selectedDay: DAY;
  // selectedDayWINS = null;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showInfo(Date: string) {
    this.selectedDay = this.D1.find( currentPlayer => currentPlayer.Date === Date);
  }
}
