import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { APP_INITIALIZER } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { AgGridModule } from 'ag-grid-angular'

// containers
import { containers } from './containers'
// components
import { components } from './components'
// store
import { reducers, effects } from './store'
import { DatasetsWebsocketService } from './services/datasets.websocket.service'

@NgModule({
  declarations: [
    ...containers,
    ...components
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('datasets', reducers),
    EffectsModule.forFeature(effects),
    AgGridModule.withComponents([])
  ],
  exports: [
    ...containers,
    ...components
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: DatasetsWebsocketService) => service.init(),
      deps: [ DatasetsWebsocketService ],
      multi: true
    }
  ]
})
export class DatasetsModule { }
