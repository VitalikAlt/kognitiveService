import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {enableProdMode} from '@angular/core';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
