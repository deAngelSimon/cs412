import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-query-display-result',
  templateUrl: './query-display-result.component.html',
  styleUrls: ['./query-display-result.component.css']
})
export class QueryDisplayResultComponent implements OnInit {
  @Input() queryData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
