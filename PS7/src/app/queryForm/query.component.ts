import { Component, OnInit } from '@angular/core';
import {APIService} from '../sharedFolder/app.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  Country: string = "";
  currentQueryData: any;
  constructor(private service: APIService ) { }

  ngOnInit(): void {
  }
  GetQueryData(): void{
    console.log(this.Country);
    this.service.loadData(this.Country).subscribe(res => {
      this.currentQueryData = res;
    });
  }

}
