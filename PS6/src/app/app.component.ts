import { Component, OnInit } from '@angular/core';
import {PLAYER} from './mockData/dataType';
import {LEAGUE} from './mockData/playerArray';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  // title = 'PS6';
  D1: PLAYER[] = LEAGUE;
  selectedPlayer: PLAYER;
  // selectedPlayerWINS = null;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(Name: string) {
    this.selectedPlayer = this.D1.find( currentPlayer => currentPlayer.Name === Name);
  }
}
