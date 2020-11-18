import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatasetsComponent } from './datasets/datasets.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DatasetsComponent]
})
export class AppModule { }
