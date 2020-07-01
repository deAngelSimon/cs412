import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// Make this an injectable service to be used by any components
@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  // THis is what hits our back end API,
  loadData(Country: string): Observable <any> {
  const URL = 'https://api.covid19api.com/country/' + Country + '?from=2020-05-22T00:00:00Z&to=2020-06-22T00:00:00Z';
  return this.http.get(URL);
  }
}

