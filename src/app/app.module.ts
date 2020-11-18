import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { datasetsReducer } from './datasets/datasets.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      datasets: datasetsReducer
    }, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [DatasetsComponent]
})
export class AppModule { }
