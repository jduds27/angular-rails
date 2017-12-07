import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HompageComponent } from './homepage.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HompageComponent
  ],
  bootstrap: [
    HompageComponent
  ]
})
export class AppModule { }