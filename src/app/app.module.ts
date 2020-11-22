import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './components/app.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { DatasetsModule } from './datasets/datasets.module'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument(),
    DatasetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
