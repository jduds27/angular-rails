import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HompageComponent } from './homepage/homepage.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HompageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }