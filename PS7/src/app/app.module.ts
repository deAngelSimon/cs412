import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryComponent } from './queryForm/query.component';
import { QueryDisplayResultComponent } from './query-display-result/query-display-result.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {APIService} from './sharedFolder/app.service';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    QueryDisplayResultComponent
  ],
  // Had to import HttpClientmodule
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
